// store.ts
import { create } from "zustand";
import { TaskStore, Task } from "./types";

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],

  addTask: (taskData) =>
    set((state) => {
      const newTask: Task = {
        id: crypto.randomUUID(),
        ...taskData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return { tasks: [...state.tasks, newTask] };
    }),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task
      ),
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  getTotalTasks: () => get().tasks.length,

  getTasksByStatus: (status) =>
    get().tasks.filter((task) => task.status === status),
}));
