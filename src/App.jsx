import { Home } from "./components/Home";
import { Tasks } from "./components/Tasks";
import { GlobalStyle } from "./components/styledComponents/GlobalStyle";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { Footer } from "./components/Footer";
 

export const App = () => {
  return (
    <>  
    <GlobalStyle /> 
    <ThemeSwitch />  
    <Home />
    {/* <AddTask/> */}
    <Tasks/>
    <Footer />

      
    </>
    
  )
}
