import { TaskStore } from "../stores/taskStore";
import { ThemeSwitch } from "./ThemeSwitch";
import { appContentStore } from "../stores/appContentStore";
import styled from "styled-components";
import { Media } from "./styledComponents/Media";
import { useEffect } from "react";

const HeadingSelection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 35px;

  /* Desktop Widescreen */
  @media ${Media.desktop}{
    justify-content: flex-end;
    
  }


`

export const Header = (isDone, toggleDone) => {
const { appContent } = appContentStore()
const taskCount = TaskStore((state) => state.taskCount); // ✅ get value, not function
const countTasks = TaskStore((state) => state.countTasks); // function
const tasks = TaskStore((state) => state.tasks);

useEffect(() => {
    countTasks();
  }, [tasks]);

  return(

    <>
    <header>
      <h1>{appContent.heading}</h1>
      <HeadingSelection>
        <p>Tasks: {taskCount}</p>
        <button onClick={toggleDone}>
            {isDone ? "All" : "Hide Done"}
        </button> 
        <ThemeSwitch /> 
      </HeadingSelection>
      
      
    </header> 
      
    </>
  )
}