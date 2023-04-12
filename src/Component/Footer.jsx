import React from "react";
import './Footer.css'

import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
            <div className="footer">
                <h2>Join Read to Earn for free and get a $10 Welcome Bonus</h2>
                <button className="landing1-btn"><Link to="/signup" style={{textDecoration: "none", color: "white"}}>Join Now</Link></button>
                <p>By becoming a member, you agree to our Terms & Conditions and Privacy Policy.</p>
                <div className="footer-div">
                    <div className="footer-div1"><i class="fa-brands fa-facebook"></i></div>
                    <div className="footer-div1"><i class="fa-brands fa-instagram"></i></div>
                    <div className="footer-div1"><i class="fa-brands fa-twitter"></i></div>
                    <div className="footer-div1"><i class="fa-brands fa-pinterest"></i></div>
                    <div className="footer-div1"><i class="fa-brands fa-linkedin"></i></div>
                </div>
            </div>
        </>
    );
}

export default Footer;