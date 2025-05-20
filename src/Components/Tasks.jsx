import { TaskStore } from "../stores/taskStore";

export const Tasks = () => {
  const { isDone, taskHeading, taskBody, toggleDone } = TaskStore();

  return(
    
    <section>
      <h2>Heading: {taskHeading}</h2>
      <div>
        <button onClick={toggleDone}>Done?</button>
        <p>Done? {isDone ? "Yes":"No"} </p>    
        <p>Body: {taskBody}</p>
        <label>Done?<input type="checkbox" onChange={toggleDone} /></label> 
        <button onClick={toggleDone}>Done?</button>
        <p>Done? {isDone ? "Yes":"No"} </p>    
      </div>          
    </section>    
    

  )
}