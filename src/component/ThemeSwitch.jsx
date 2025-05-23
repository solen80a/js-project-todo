import { useThemeStore } from "../stores/useThemeStore" 

export const ThemeSwitch = () => {

  const { setLightTheme, setDarkTheme, isLightTheme } = useThemeStore()


  const toggleTheme = () => {
    if (isLightTheme) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };  

  return (
    <>     
      <button onClick={() => toggleTheme("dark")}>
        {isLightTheme ? "Dark" : "Light"}
      </button>  
    </>
  )
}