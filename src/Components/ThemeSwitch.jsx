import { useThemeStore } from "../stores/useThemeStore"
import { useEffect } from "react";

export const ThemeSwitch = () => {

  const { setLightTheme, setDarkTheme, isLightTheme } = useThemeStore()

  const handleChange = (e) => {
    const selectedTheme = e.target.value;
    if (selectedTheme === 'light') {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  return (
    <section>
      
      <form>
      <label htmlFor="theme">Choose a theme</label>
        <select id="theme" name="theme" onChange={handleChange} >
          <option value="dark">Dark</option> 
          <option value="light">Light</option>                
        </select>    
      </form>
      
      <button onClick={setLightTheme}>Light Theme</button>
      <button onClick={setDarkTheme}>Dark Theme</button>

    </section>
  )
}