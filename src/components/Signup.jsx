import React, { useState, useHook } from 'react';
import axios from 'axios';


function Register() {
    //input
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignup(e) {
        e.preventDefault();

        await axios.post('http://localhost:3333/register', {
            username, password
        })
            .then(function (response) {
                if (response.data === "none") {
                    alert("Not filled completely ;(")
                }
                !response.data && alert("Username already exists!");

            })

            .catch(function (error) {
                console.log(error);
            })
        setUsername('');
        setPassword('');
    }

    // useHook(() => {

    // })

    return (
        <div className="form">
            <h3>Signup</h3>
            <form onSubmit={handleSignup}>
                <input className="input un" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="input pw" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="form-btn" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;