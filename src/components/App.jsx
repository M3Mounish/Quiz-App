import React, { useState } from "react";
import Popup from "reactjs-popup";
import Home from "./Home";
import Quiz from "./quizlogic";
import { ReactComponent as Homelogo } from '../assets/house-solid.svg';


function App() {

  const [home, setHome] = useState(true);
  const [quiz, setQuiz] = useState(false);

  return (
    <div>
      <div className="navbar">
        <header>Quiz App</header>
        <Homelogo className='home-logo' onClick={() => { setHome(true) }} />

      </div>
      {home && <Home />}
      {!home && <Quiz />}


      {home && <button onClick={() => { setHome(false) }}>Quiz 1</button>}


    </div>
  )
}


export default App;
