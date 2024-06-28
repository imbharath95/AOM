import {useState} from "react";

const Login = () => {
    const handlelogin = () => {
        fetch("http://localhost:3001/login")
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <form onSubmit={handlelogin}>
        <div className="login-form">
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button type="submit">LOG IN</button>     
        </div>
        </form>
    )
}

export default Login;