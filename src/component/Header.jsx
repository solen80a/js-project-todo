import { TaskStore } from "../stores/taskStore";
import { ThemeSwitch } from "./ThemeSwitch";
import { appContentStore } from "../stores/appContentStore";
import styled from "styled-components";
import { Media } from "./styledComponents/Media";
//import { useEffect } from "react";

const HeadingSelection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  gap: 35px;

  /* Desktop Widescreen */
  @media ${Media.desktop}{
    
    
  }
`
const HeaderSelectionCount = styled.div `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

`

const HeaderSelectionToggle = styled.div `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 20px;

  button {
    width: 95px;
    height: 25px;
  }
`

export const Header = () => {  
const { appContent } = appContentStore();
const { toggleShowDone, showDone } = TaskStore();
const taskCount = TaskStore((state) => state.tasks.length);
const notDoneCount = TaskStore((state) =>
  state.tasks.filter((task) => !task.isDone).length
  );


  return(

    <>
    <header>
      <h1>{appContent.heading}</h1>
      <HeadingSelection>
        <HeaderSelectionCount>
          <p>Total: {taskCount}</p>
          <p>Left: {notDoneCount}</p>
        </HeaderSelectionCount>
        <HeaderSelectionToggle>
          <button onClick={toggleShowDone}>
            {showDone ? "Left" : "All"}
          </button>
          <ThemeSwitch /> 
        </HeaderSelectionToggle>  
      </HeadingSelection>
      
      
    </header> 
      
    </>
  )
}