import { createGlobalStyle } from "styled-components";
import { Media } from "./Media";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;   
    align-items: center;    
  }

  body {
    //font-family: "Indie Flower", cursive;
    //font-family: "Rubik Dirt", system-ui;
    //font-family: "Mystery Quest", system-ui;
    //font-family: "Creepster", system-ui;
    
    font-family: "Courier Prime", monospace; //MABY!! multiple ones
    //font-family: "Cutive Mono", monospace; //MABY!!
    //font-family: "Source Code Pro", monospace; //MABY!!
    //font-family: "IBM Plex Mono", monospace;//MABY!!
    background-color: #F4F4F4;
    color: #434040;
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
      
  }

  H1 {
    font-family: "Special Elite", system-ui;
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