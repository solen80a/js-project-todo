import { Home } from "./Components/Home"
import { UserInfo } from "./Components/UserInfo.jsx"
import { UserSettings } from "./Components/UserSettings.jsx"
import { Tasks } from "./Components/Tasks.jsx"
 

export const App = () => {
  return (
    <>    
    <Home />
    <Tasks/>
    
    <UserInfo />
    <UserSettings />
    </>
    
  )
}
