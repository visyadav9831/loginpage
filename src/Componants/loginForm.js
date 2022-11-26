import { React } from "react";
import "./loginForm.css"

const LoginForm = () =>{
    return(
        <div className="cover" >
            <h1>Login<br/></h1><br/>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <div className="login-btn" >Login</div>
            <p className="text"> Or Login using</p>


            <div className="alt-login"></div>
            <div className="facebook"></div>
            <div className="gmail"></div>
        </div>
    )
}

export default LoginForm