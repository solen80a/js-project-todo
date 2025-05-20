import { AddTaskStore } from "../stores/AddTaskStore";


export const AddTask = () => {
  const { addTask, setAddTask } = AddTaskStore()

  return(
    <section>
      <form>
        <label>
          <textarea
            value={addTask} 
            onChange={(event) => setAddTask(event.target.value)}
            />
        </label>
      </form>
      
      <p>Task {addTask}</p>

    </section>
  )
}