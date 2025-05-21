import { useState } from "react";
import { TaskStore } from "../stores/taskStore";


export const Tasks = () => {
  const { isDone, tasks, toggleDone, setTask } = TaskStore();  

  const [newTask, setNewTask] = useState("");

  const handleNewTask = (event) => {
    setNewTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(newTask) {
      setTask(newTask)
      setNewTask("")
    } else{
      alert("Please add some text before clicking submit")
    }
  } 

  return(
    <>    
    <article>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
          <textarea
            value={newTask} 
            onChange={handleNewTask}
            />
        </label>
        <button type="submit">Add a new task</button>
        </form>
      </div>
    </article>
    
    <section>
      <div>        
        {tasks.map((newtasks, index) => (
          <article key={index}>Task {index + 1}: {newtasks}
          <button onClick={toggleDone}>Done?</button>
          <label>Done?<input type="checkbox" onChange={toggleDone} /></label>
          <p>Done? {isDone ? "Yes":"No"} </p> 
          </article>
        ))} 
      </div>          
    </section>    
    </>  
    

  )
}