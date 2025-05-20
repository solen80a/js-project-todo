import { Home } from "./Components/Home";
import { Tasks } from "./Components/Tasks";
import { AddTask } from "./Components/AddTask";
import { GlobalStyle } from "./Components/GlobalStyle";
 

export const App = () => {
  return (
    <>  
    <GlobalStyle />  
      <Home />
      <AddTask/>
      <Tasks/>

      
    </>
    
  )
}
