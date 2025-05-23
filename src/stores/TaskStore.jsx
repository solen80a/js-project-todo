import { create } from "zustand";

export const TaskStore = create((set) => ({
  tasks: [],
  taskCount: 0,
  showDone: true,

  setTask: (newTask) =>
  set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), message: newTask }]
  })),

  removeTasks: (idToRemove) =>
    set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== idToRemove)
  })), 

  toggleDone: (id) =>
  set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ),
  })),

  toggleShowDone: () =>
    set((state) => ({ showDone: !state.showDone })),

}));









