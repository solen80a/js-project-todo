import { createGlobalStyle } from "styled-components";
import { Media } from "./Media";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;   
    align-items: center;
    
    
  }

  body {
    /*font-family: "Indie Flower", cursive;
    font-family: "Rubik Dirt", system-ui;
    font-family: "Mystery Quest", system-ui;
    font-family: "Creepster", system-ui;*/
    /* MABY!! multiple ones  */
    font-family: "Courier Prime", monospace; 
    /*font-family: "Cutive Mono", monospace; //MABY!!
    font-family: "Source Code Pro", monospace; //MABY!!
    font-family: "IBM Plex Mono", monospace;//MABY!!*/
    /* background-color: #F4F4F4;
    color: #434040; */
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    transition: background 0.3s ease, color 0.3s ease; 
      
  }

  body.light {
    background: yellow;
    color: black;
  }

  body.dark {
    background: grey;
    color: black;
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

  footer{ 
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: left;
    font-size: 16px;  
    background-color: grey; 
    left: 0px;
    bottom: 0px; 
    right: 0px;
    margin-bottom: 0px;   
    border: 1px solid #000;    
    width: 250px;
    height: 50px;
    margin: 28px auto; 
    padding: 12px 18px;
    gap: 12px;
    transition: ease 1s; 

    @media (min-width: 640px) {
      width: 350px;    
    }

    img {
      background-color: black;      
      border-radius: 50%;   
    }

    img:hover {  
      transform: scale(1.1);
    }
}





  
`


;