import { useState } from "react";
import { TaskStore } from "../stores/taskStore";


export const Tasks = () => {
  const { showDone, tasks, toggleDone, setTask, removeTasks,  } = TaskStore();  

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
    <section>
      <article className="stickyNote">
        <div>
          <form onSubmit={handleSubmit}>
            <label>
            <input
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
        .filter((task) => showDone || !task.isDone)
        .map((task, index) => (
          <article className="stickyNote" key={task.id}>
            <div>
              <p>Task {index + 1}: {task.message}</p> 

          <button onClick={() => removeTasks(task.id)}>×
          </button>           
          
          <button onClick={() => toggleDone(task.id)}>
            {task.isDone ? "–" : "✓"}
          </button>        

          {/* <p>Done? {task.isDone ? "Yes":"No"} </p>  */}

            </div>
          

          </article>
        ))} 
      </div>          
    </section>    
    </>  
    

  )
}