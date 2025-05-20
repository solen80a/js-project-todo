import { useUserStore } from "../stores/userStore";

export const UserInfo = () => {
  const { userName, age } = useUserStore()

  return (

    <div>
      <h2>User Profile</h2>
      <p>UserName: {userName}</p>
      <p>Age: {age}</p>
     

    </div>
    

  
  )
}