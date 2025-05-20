import { useUserStore } from "../stores/userStore";

export const UserSettings = () => {
  const { toggleLogin, incrementAge, setUserName, isLoggedIn, userName } = useUserStore()

  return (
    <div>
      <h2>User Settings</h2>
      <p>Logged in: {isLoggedIn ? "Yes":"No"} </p>
      <button onClick={toggleLogin}>Toggle Login</button>
      <button onClick={incrementAge}>Increment Age</button>
      <label htmlFor="">New username:
        <input value={userName} onChange={(event) => setUserName(event.target.value)}/>
      </label>
    </div>
  )


}