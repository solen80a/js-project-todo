import { create } from "zustand";

export const useThemeStore = create ((set) => ({
  
  isLightTheme: false,

  setLightTheme: () => set({ isLightTheme: true }),
  setDarkTheme: () => set({ isLightTheme: false }),
   
}))