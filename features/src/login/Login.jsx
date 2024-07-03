import {useState} from "react";
import '/Users/sainathreddy/Desktop/AOM/features/src/login/style.css'
const Login = () => {
    const handlelogin = () => {
        fetch("http://localhost:3001/login")
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <form onSubmit={handlelogin}>
        <div className="login-form">
            <input type="text" placeholder="Username" class="input-field"/>
            <input type="password" placeholder="Password" class="input-field"/>
            <button type="submit" class="login-button">LOG IN</button>     
        </div>
        </form>
    )
}

export default Login;