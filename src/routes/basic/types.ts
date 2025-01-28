// types.ts
export type Task = {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in-progress" | "completed";
  createdAt: Date;
  updatedAt: Date;
};

export type TaskStore = {
  tasks: Task[];
  // Actions
  addTask: (task: Omit<Task, "id" | "createdAt" | "updatedAt">) => void;
  updateTask: (id: string, updates: Partial<Omit<Task, "id">>) => void;
  deleteTask: (id: string) => void;
  // Selectors
  getTotalTasks: () => number;
  getTasksByStatus: (status: Task["status"]) => Task[];
};
