import { create } from "zustand";

export const TaskStore = create ((set) => ({
  isDone: false,
  taskHeading: "Monday",
  taskBody: [
    "Clean",
    "Workout",
    "Have fun",
  ],

  toggleDone: () => set((state) => ({ isDone: !state.isDone })),
  setTaskHeading: (newTaskHeading) => set({ taskHeading: newTaskHeading}),
  setTaskBody: (newTaskBody) => set({ taskBody: newTaskBody})


}))







