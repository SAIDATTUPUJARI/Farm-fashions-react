import React, { useState } from "react";
import Home from "./home/Home"
import "./login.css"
let Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedin, setlogin]= useState(false)
    const handler = (e) => {
        e.preventDefault();
        if (email === "sai@gmail" && password === "sai") {
            setlogin(true);
        } else {
            alert("invalid username or password");
        }
    };
    if(loggedin){
        return <Home />
    }

    return (
        <div className="loginbody">
            <form className="submit" onSubmit={handler}>
                <p>email: sai@gmail<br></br> password: sai</p>
                <input
                className="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                className="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login" type="submit" name="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;