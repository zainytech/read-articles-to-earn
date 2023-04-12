import React from "react";
import './Signup.css'


import video4 from '../assets/video4.mp4'
// import Header from "./Header";

const Signup = () => {
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
                        <h2>Sign Up For Free</h2>
                        <div className="signup2-div">
                            <div>Email: </div>
                            <input type='email' placeholder="email"/>
                        </div>
                        <div className="signup2-div">
                            <div>Password: </div>
                            <input type='password' placeholder="password"/>
                        </div>
                        <button>Join Now</button>
                        {/* <p>By joining, you agree to the Terms & Conditions,Privacy Policy, andRefer-A-Friend Program Terms.</p> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;