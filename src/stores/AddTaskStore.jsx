import { create } from "zustand";

export const AddTaskStore = create ((set) => ({
  addTask: "",

  setAddTask: (newAddTask) => set({ addTask: newAddTask })

}))