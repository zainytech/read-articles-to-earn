import React from "react";
import './Login.css'


import video4 from '../assets/video4.mp4'



const Login = () => {
    return(
        <>
            <div className="signup">
                <video autoPlay loop muted id="myVideo" >
                    <source src={video4} type='video/mp4'/>
                </video>
                <div className="signup2">
                    <div className="signup21">
                        <h2>Get your</h2>
                        <h1 datatype="30$ Bonus Today!"> 30$ Bonus Today!</h1>
                    </div>
                    <div className="signup22">
                        <h2>Welcome back!</h2>
                        <div className="signup2-div">
                            <div>Email: </div>
                            <input type='email' placeholder="email"/>
                        </div>
                        <div className="signup2-div">
                            <div>Password: </div>
                            <input type='password' placeholder="password"/>
                        </div>
                        <button>Sign In</button>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;