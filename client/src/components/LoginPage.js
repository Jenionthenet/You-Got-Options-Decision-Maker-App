
import React, { useState } from 'react'
import { connect } from 'react-redux'


function LoginPage(props) {


    const [user, setUser] = useState(
        {
            username: "",
            password: ""
        })
    const [message, setMessage] = useState('')

    const handleLoginChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        fetch('https://yougotoptions.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,

            })
        }).then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    localStorage.setItem('username', result.user.username)
                    localStorage.setItem('userId', result.user.id)
                    props.onLoggedIn()
                    props.history.push('/add-decision')
                } else {
                    setMessage(result.message)
                }
            })
    }

    // const handleGuestLogin = () => {

    // }
    <form method="POST" action="/login">
        <input type="hidden" name="username" value="johndoe" />
        <input type="hidden" name="password" value="password" />
        <button>Login as Guest</button>
    </form>


    return (
        <div id="form">
            <div id="inputDiv">
                <h1 id="inputTitle">Log In</h1>
                <label>Username</label>
                <input className="input username" type="text" name="username" value={user.username} onChange={handleLoginChange} placeholder="Enter username" />
                <label>Password</label>
                <input className="input password" type="password" name="password" value={user.password} onChange={handleLoginChange} placeholder="Enter password" />
            </div>
            <button id="inputButton" onClick={handleSubmit}>Log In</button>
            {/* <form >
                <input type="hidden" name="username" value="johndoe" />
                <input type="hidden" name="password" value="password" />
                <button onClick={handleSubmit}>Login as Guest</button>
            </form> */}
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoggedIn: () => dispatch({ type: 'ON_LOGGED_IN' })
    }
}



export default connect(null, mapDispatchToProps)(LoginPage)