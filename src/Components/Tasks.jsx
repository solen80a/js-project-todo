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
    <section>
      <article>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
            <input className="submit"
              type="text"
              value={newTask} 
              onChange={handleNewTask}
              />
          </label>
          <button type="submit">+</button>
          </form>
        </div>
      </article>
          
    
    
      <div>
             
        {tasks
        .filter((task) => !isDone || !task.done)
        .map((task, index) => (
          <article key={task.id}>
          <p>Task {index + 1}: {task.message}</p>            
          
          <button onClick={toggleDone}>
            {task.done ? "–" : "✓"}
          </button>


          <label>Done?<input type="checkbox" onChange={toggleDone} /></label>
          <p>Done? {isDone ? "Yes":"No"} </p> 
          <button onClick={() => removeTasks(task.id)}>×</button>
          
          </article>
        ))} 
      </div>          
    </section>    
    </>  
    

  )
}