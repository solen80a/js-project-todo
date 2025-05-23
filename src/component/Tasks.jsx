import { useState } from "react";
import { TaskStore } from "../stores/taskStore";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../public/assets/Animation.json";

const TaskButtons = styled.div`
  position: absolute; 
  bottom: 10px; /* Adjust spacing */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: 10px; /* Space between buttons */
`
const TaskList = styled.div`      
  flex-direction: row;
  flex-wrap: wrap;      
  gap: 20px;  
`
const AllTasksDone = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

`

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

  // Check if all tasks are marked as done
  const allTasksDone = tasks.length > 0 && tasks.every((task) => task.isDone);

  return(
    <> 
    <section>
      <article className="stickyNote">
        <div>
          <form onSubmit={handleSubmit}>
            <label>
            <input
              type="text"
              aria-label="Add a todo"
              value={newTask} 
              onChange={handleNewTask}
              />
          </label>
          <TaskButtons>
            <button type="submit">+</button>
          </TaskButtons>
          </form>
          </div>
      </article> 

       {/* Show Lottie animation when all tasks are done */}
    {allTasksDone && (
      <div>
      <p className="allDone">Good Job, All Done!</p>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ width: "300px", height: "300px", }}
      />
       </div>
    )}    
    
      <TaskList>             
        {tasks
        .filter((task) => showDone || !task.isDone)
        .map((task) => (
          
            <article key={task.id}>
              <div className="stickyNote"
              style={{                
                "--rotation": `${Math.floor(Math.random() * 10 - 5)}deg`,              
              }}>
                <p>{task.message}</p> 
                <TaskButtons>
                  
                  <div>
                    <button onClick={() => removeTasks(task.id)}>×
                    </button>                  
                  </div>  

                  
                  <div >
                    <button onClick={() => toggleDone(task.id)}>
                    {task.isDone ? "–" : "✓"}
                    </button>
                    
                  </div>         
                </TaskButtons>
              </div>
            </article>
        ))} 
      </TaskList> 
    </section>    
    </>  
  )
}