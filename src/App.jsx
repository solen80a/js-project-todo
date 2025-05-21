import { Home } from "./components/Home";
import { Tasks } from "./components/Tasks";
//import { AddTask } from "./components/AddTask";
import { GlobalStyle } from "./components/GlobalStyle";
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
