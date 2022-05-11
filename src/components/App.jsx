import React, { useState, useEffect } from "react";

import Home from "./Home";
import Quiz from "./Quiz";
import Login from "./Login";
import Profile from "./Profile";
//assets {icons}
import { ReactComponent as Homelogo } from '../assets/house-solid.svg';
import { ReactComponent as Userlogo } from '../assets/user-solid.svg';

function App() {
  //hide/show
  const [home, setHome] = useState(1);//1-home 2-login 3-Profile
  const [login, setLogin] = useState(true);

  //user
  const [user, setUser] = useState(false);
  const [profileName, setProfileName] = useState('');

  //   useEffect(() => {
  //     axios.get("http://localhost:3333/home").then(function (response) {
  //         setHome(response.data)
  //     })
  // }, [])
  function cB(data, username) {
    setProfileName(username);
    data === 'y' && setUser(true, () => { console.log(user); });

    console.log(profileName);
  }
  function handleProfile() {
    setHome(3);
  }

  return (
    <div>
      <div className="navbar">
        <h2>Quiz App</h2>
        <Homelogo className='home-logo' onClick={() => { setHome(1); }} />
        {!user ? <button className="login-btn profile-btn" onClick={() => { setHome(2) }}>Login</button> : <button className="profile-btn" onClick={handleProfile}><Userlogo className="user-logo" />{profileName}</button>}
      </div>
      {home === 1 && <Home />}
      {/* {!home && <Quiz />} */}

      {/* <p>Nothing .... Ever walk away... i'll never walk on cornelia street agian!</p> */}
      {/* {home && !login && <button onClick={() => { setHome(false) }}>Quiz 1</button>} */}

      {home === 2 && <Login user={cB} />}

      {home === 3 && <Profile username={profileName} />}
    </div>

  )
}


export default App;

