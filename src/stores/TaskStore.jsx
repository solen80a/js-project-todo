import { create } from "zustand";

export const TaskStore = create((set) => ({
  tasks: [
    {id: 1, message:"Have fun 🥳", isDone: false}
  ],
  taskCount: 0,
  

  

  // hideDoneTask: (idToHide) =>
  // set((state) => ({
  //   tasks: state.tasks.map((task) =>
  //     task.id === idToHide ? { ...task, isdone: true } : task
  //   )
  // })),

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

  countTasks: () =>
    set((state) => ({
      taskCount: state.tasks.length
    })),

}));









