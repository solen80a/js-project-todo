import { create } from "zustand";

export const TaskStore = create((set) => ({
  isDone: false,
  tasks: ["Have fun 🥳"],

  toggleDone: () => set((state) => ({ isDone: !state.isDone })),
  setTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] }))
}));









