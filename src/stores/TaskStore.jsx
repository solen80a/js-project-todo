import { create } from "zustand";

export const TaskStore = create((set) => ({
  tasks: [
    {id: 1, message:"Have fun 🥳"}
  ],
  isDone: false,
  

  toggleDone: () => set((state) => ({ 
    isDone: !state.isDone })),

  setTask: (newTask) =>
  set((state) => ({
    tasks: [...state.tasks, { id: Date.now(), message: newTask }]
  })),


  removeTasks: (idToRemove) =>
    set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== idToRemove)
  })),

}));









