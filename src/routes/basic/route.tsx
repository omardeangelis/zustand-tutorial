// App.tsx
import { useTaskStore } from "@/routes/basic/store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useActionState, useCallback, useState } from "react";
import { Input } from "@/components/ui/input";

export default function BasicRoute() {
  const { tasks, addTask, updateTask, deleteTask, getTotalTasks } =
    useTaskStore();

  const updateTaskAction = useCallback(
    async (_prevState: any, formData: FormData) => {
      const id = formData.get("id") as string;
      const title = formData.get("title") as string;
      const description = formData.get("description") as string;

      updateTask(id, { title, description });
      setIsUpdating(false);
      return null;
    },
    [updateTask]
  );

  const [, formAction] = useActionState(updateTaskAction, null);

  const [isUpdating, setIsUpdating] = useState(false);

  const handleAddTask = () => {
    addTask({
      title: "New Task",
      description: "Task description",
      status: "todo",
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>

      <div className="mb-4">
        <Button onClick={handleAddTask}>Add New Task</Button>
      </div>

      <div className="grid gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="border p-4 rounded shadow">
            {isUpdating ? (
              <form className="flex items-center gap-2" action={formAction}>
                <div className="flex flex-col gap-2">
                  <input type="hidden" name="id" value={task.id} />
                  <Input name="title" defaultValue={task.title} />
                  <Input name="description" defaultValue={task.description} />
                </div>
                <Button type="submit">Save</Button>
              </form>
            ) : (
              <div className="flex flex-col gap-2">
                <h3 className="font-bold">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
              </div>
            )}
            <div className="flex gap-2 mt-2">
              <Badge variant="default" size="sm">
                {task.status}
              </Badge>
              <Button variant="destructive" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
              <Button onClick={() => setIsUpdating(true)}>Edit</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-gray-600">Total tasks: {getTotalTasks()}</div>
    </div>
  );
}
