import { Tasks } from "./component/Tasks";
import { GlobalStyle } from "./component/styledComponents/GlobalStyle";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
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
    <Tasks/>
    <Footer />
    </>
  )
}
