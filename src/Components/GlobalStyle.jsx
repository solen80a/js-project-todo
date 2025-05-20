import { createGlobalStyle } from "styled-components";
import { Media } from "./Media";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;   
    align-items: center;    
  }

  body {
    font-family: poppins, sans-serif;
    background-color: #F4F4F4;
    color: #434040;
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;   
  }

  H1, H2, Body {
    margin: 0;
    padding: 0;
  } 

  section {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid black;
   

    /* Desktop Tablet */
    @media ${Media.tablet}{ 
      
    }
    
    /* Desktop Widescreen */
    @media ${Media.desktop}{ 
      
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }

  
`
;