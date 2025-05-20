import { Home } from "./Components/Home";
import { Tasks } from "./Components/Tasks";
import { AddTask } from "./Components/AddTask";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeSwitch } from "./Components/ThemeSwitch"
 

export const App = () => {
  return (
    <>  
    <GlobalStyle /> 
    <ThemeSwitch />  
    <Home />
    <AddTask/>
    <Tasks/>

      
    </>
    
  )
}
