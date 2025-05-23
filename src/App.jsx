import { Home } from "./components/Home";
import { Tasks } from "./components/Tasks";
import { GlobalStyle } from "./components/styledComponents/GlobalStyle";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useEffect } from "react";
import { useThemeStore } from "./stores/useThemeStore"
 

export const App = () => {

  const isLightTheme = useThemeStore((state) => state.isLightTheme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  return (
    <> 
    
    <GlobalStyle /> 
    <Header />
      
    <Home />
    <Tasks/>
    <Footer />
     
    

      
    </>
    
  )
}
