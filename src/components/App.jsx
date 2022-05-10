import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";

import Home from "./Home";
import Quiz from "./quizlogic";
import Login from "./Login";
import { ReactComponent as Homelogo } from '../assets/house-solid.svg';


function App() {
  //hide/show
  const [home, setHome] = useState(true);
  const [login, setLogin] = useState(true);

  //user
  const [user, setUser] = useState(false);
  const [username, setUsername] = useState('');
  //   useEffect(() => {
  //     axios.get("http://localhost:3333/home").then(function (response) {
  //         setHome(response.data)
  //     })
  // }, [])
  function cB(data) {

    data == 'y' && setUser(!user);
    console.log(user);

  }

  return (
    <div>
      <div className="navbar">
        <header>Quiz App</header>
        <Homelogo className='home-logo' onClick={() => { setHome(true); setLogin(false); }} />
        {!user ? <button className="login-btn" onClick={() => { setLogin(true) }}>Login</button> : <button>Nothing</button>}
      </div>
      {home && <Home />}
      {/* {!home && <Quiz />} */}

      <p>Nothing .... Ever walk away... i'll never walk on cornelia street agian!</p>
      {/* {home && !login && <button onClick={() => { setHome(false) }}>Quiz 1</button>} */}

      {login && home && <Login user={cB} />}
    </div>
  )
}


export default App;

