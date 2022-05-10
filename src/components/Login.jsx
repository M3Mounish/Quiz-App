import React, { useState } from 'react';
import axios from "axios";

import Register from './Signup';

function Login(props) {
    // inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //user 
    const [loggedIn, setLoggedIn] = useState(false);
    //trigger
    const [register, setRegister] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        await axios.post('http://localhost:3333/login', { username, password })
            .then(function (response) {
                console.log(response);
                response && setLoggedIn(true);
                response && props.user('y');


            })

            .catch(function (error) {
                console.log(error);
            })

    }

    return (
        <div>
            {!register && <div className="form">
                <h3>Login</h3>
                <form onSubmit={handleLogin}>
                    <input className="input un" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className="input pw" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="form-btn" type="submit">Submit</button>
                </form>
                <button className='login-redirect-btn' onClick={() => { setRegister(true) }}>New?Signup</button>
            </div>}
            {register && <Register />}
        </div>

    );
}

export default Login;