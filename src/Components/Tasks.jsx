import { useState } from "react";
import { TaskStore } from "../stores/taskStore";


export const Tasks = () => {
  const { isDone, tasks, toggleDone, setTask, removeTasks,  } = TaskStore();  

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

  //const removeTasks = TaskStore(state => state.removeTasks);

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
        {tasks.map((task, index) => (
          <article key={task.id}>
          <p>Task {index + 1}: {task.message}</p>            
          <button onClick={toggleDone}>Done?</button>
          <label>Done?<input type="checkbox" onChange={toggleDone} /></label>
          <p>Done? {isDone ? "Yes":"No"} </p> 
          <button onClick={() => removeTasks(task.id)}>Remove task</button>
          
          </article>
        ))} 
      </div>          
    </section>    
    </>  
    

  )
}