
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function RegistrationPage(props) {

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""
    })
    const [error, setError] = useState('')
    const history = useHistory()


    const handleRegisterChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        fetch('https://yougotoptions.herokuapp.com/register', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
                email: user.email
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result)
            
                if (result.success == true) { 
                    console.log("hello world")
                 props.history.push('/login')
                } else {
                    setError(result.error)
                }

            })
    }

    return (
        <div id="form">

            <div id="inputDiv">
                <h1 id="inputTitle">Sign Up</h1>
                <label>Username</label>
            <input className="input username"  type="text" name="username" value={user.username} onChange={handleRegisterChange} placeholder="Enter username" />
            <label>Password</label>
            <input  className="input password" type="password" name="password" value={user.password} onChange={handleRegisterChange} placeholder="Enter password" />
            <label>Email Address</label>
            <input className="input email"  type="email" name="email" value={user.email} onChange={handleRegisterChange} placeholder="Enter email" />
            </div>
            <button id="inputButton" onClick={handleSubmit}>Register</button>
            {(error === "Something went wrong." || 'Please include username, password, and email.') && <p>{error}</p>}
            
        </div>
    )

}

export default RegistrationPage
