import { createGlobalStyle } from "styled-components";
import { Media } from "./Media";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;   
    align-items: center;
    
    
  }

 

  header {
    background-color: #E5E5E5; 
    text-align: center;
    height: 200px;
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
    font-family: "Courier Prime", monospace;    
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

  body.light .stickyNote {    
    color:#000;
    background: #E5E5E5;
    box-shadow: 5px 5px 7px #000(33,33,33,.7);
    
  }

  body.dark .stickyNote {   
    color:#000;
    background: #FCA311;
    box-shadow: 5px 5px 7px #E5E5E5(33,33,33,.7);
    
  }

  body.light section{
    background-color: #FCA311;
  }

  body.dark section{
    background-color: #000;
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
    
    background-color: #000;    
    width: 200px;
   

    /* Desktop Tablet */
    @media ${Media.tablet}{ 
      
      width: 300px;
      
    }
    
    /* Desktop Widescreen */
    @media ${Media.desktop}{ 
      
      width: 500px;
      
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    padding: 10px;  
    
  }

  label {
    display: flex;    
    justify-content: center;
    align-items: center;
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
  font-family: "Courier Prime", monospace; 
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: #000;
  color: #E5E5E5;
  text-decoration: none;  
  font-size: 16px;
  letter-spacing: 2px;
  border-radius: 30px;
  border: none;
  padding: 8px 12px;
  margin-right: 5px;
  cursor: pointer;
  /* box-shadow: 12px 12px 16px 0 #E5E5E5, -12px -12px 16px 0 #E5E5E5, inset 0 0 0 0 transparent; */
  /* transition: box-shadow 200ms, transform 300ms cubic-bezier(.2,2,1,1); */
  transition: background 0.3s ease, transform 0.3s ease;
}

button:hover {
  color: #434245;
  background: #333; 
  transform: scale(1.05);
}

button:active {
  box-shadow: 0 0 0 transparent, 0 0 0 transparent, inset 8px 8px 12px 0px rgba(198, 186, 207, .9), inset -8px -8px 12px 0px rgba(242, 235, 252, 0.9);
  transform: scale(.9);
}

.stickyNote {
  width: 128px;
  height: 128px;
  background: #FCA311;
  color: #000;
  border: 2px solid #333; /* New darker burnt orange border */
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4);
  padding: 20px;
  font-family: "Courier Prime", monospace; 
  transform: rotate(-2deg);
  margin: 20px auto;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
}

.stickyNote:hover {
  transform: rotate(-2deg) scale(1.05);
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.6);
  background: #FDBB40;
}

.stickyNote form input[type="text"] {
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  padding: 8px 0;
  margin-bottom: 10px;
}

/* .stickyNote form button {
  background: #000;         
  color: #fff;              
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1em;
  transition: background 0.3s ease, transform 0.3s ease;
  border-radius: 0;         
}

.stickyNote form button:hover {
  background: #333;         
  transform: scale(1.05);
} */

/*
.stickyNote button {
  background: #000;          Black background 
  color: #fff;               White text 
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-family: inherit;
  font-size: 1em;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-right: 5px;
  border-radius: 0;         Sharp corners 
}
*/

/* .stickyNote 
/*button:hover {
  background: #333;          Dark gray on hover 
  transform: scale(1.05);
} */

  
`


;