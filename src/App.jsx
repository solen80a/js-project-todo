import { Home } from "./components/Home";
import { Tasks } from "./components/Tasks";
import { GlobalStyle } from "./components/styledComponents/GlobalStyle";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
 

export const App = () => {
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
