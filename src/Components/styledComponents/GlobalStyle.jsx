import { createGlobalStyle } from "styled-components";
import { Media } from "./Media";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;   
    align-items: center;
    
    
  }

 

  header {
    background-color: #E5E5E5;
    /* display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; */
    text-align: center;
    height: 100px;
    width: 100vw;
    padding: 10px;

    /* Desktop Tablet */
    @media ${Media.tablet}{ 
      
      
      
    }
    
    /* Desktop Widescreen */
    @media ${Media.desktop}{ 
      
      
      
    }

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
    /* background-color: #000;
    color: #000; */
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    transition: background 0.3s ease, color 0.3s ease; 
      
  }

  body.light {
  background-color: #FCA311;
  color: #000;
}

body.dark {
  background-color: #000;
  color: #000;
}

  body.light button{
    background: #FCA311;
    color: #000;
    
  }

  body.dark button{
    background: #000;
    
  }

  h1 {
    font-family: "Special Elite", system-ui;
    text-align: center;
    font-size: 32px;
  }

  h1, h2, body {
    margin: 0;
    padding: 0;

  } 

  section {
    display: flex;
    flex-wrap: wrap;
    border: 2px solid black;
    background-color: #E5E5E5;
    /* height: 200px; */
    width: 200px;
    
  /* section.light {
    background: #FCA311;
    color: black;
  }

  section.dark {
    background: #E5E5E5;
    color: black;
  } */
   

    /* Desktop Tablet */
    @media ${Media.tablet}{ 
      /* height: 300px; */
      width: 300px;
      
    }
    
    /* Desktop Widescreen */
    @media ${Media.desktop}{ 
      /* height: 500px; */
      width: 500px;
      
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }

  label {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
  }

  .submit {
    
    all: unset;

    align-items: center;
    
    /* border: #000 solid 1px;
    border-radius: 30px;
    width: 150px; */

    text-decoration:none;
    color:#E5E5E5;
    background: #000;
    display:block;
    height:8em;
    width:8em;
    padding:1em;
    box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  }

  footer{ 
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: left;
    font-size: 16px;  
    background-color: #E5E5E5; 
    left: 0px;
    bottom: 0px; 
    right: 0px;
    margin-bottom: 0px;   
    border: 1px solid #000;    
    
    height: 50px;
    margin: 28px auto; 
    padding: 12px 18px;
    gap: 12px;
    transition: ease 1s;
    width: 100vw; 

    @media (min-width: 640px) {
          
    }

    img {
      background-color: black;      
      border-radius: 50%;   
    }

    img:hover {  
      transform: scale(1.1);
    }
}


button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: #000;
  color: #E5E5E5;
  text-decoration: none;
  font-family: "Courier Prime", monospace;
  font-size: 16px;
  letter-spacing: 2px;
  border-radius: 30px;
  border: none;
  /* box-shadow: 12px 12px 16px 0 #E5E5E5, -12px -12px 16px 0 #E5E5E5, inset 0 0 0 0 transparent; */
  transition: box-shadow 200ms, transform 300ms cubic-bezier(.2,2,1,1);
}

button:hover {
  color: #434245;
}

button:active {
  box-shadow: 0 0 0 transparent, 0 0 0 transparent, inset 8px 8px 12px 0px rgba(198, 186, 207, .9), inset -8px -8px 12px 0px rgba(242, 235, 252, 0.9);
  transform: scale(.9);
}



  
`


;