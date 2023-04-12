import React from "react";
import './Landingpage.css';

import earn1 from '../assets/earn1.png';
import earn2 from '../assets/earn2.png';

import earnw1 from '../assets/earnw1.png';
import earnw2 from '../assets/earnw2.png';
import earnw3 from '../assets/earnw3.png';

import earnb1 from '../assets/earnb1.png';
import earnb2 from '../assets/earnb2.png';
import earnb3 from '../assets/earnb3.png';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Landingpage = () => {
    return(
        <>
            <Header/>
            <div className="landing">
                <div className="landing1">
                    <h1>Get Money For Reading</h1>
                    <p style={{fontSize: "23px"}}>Reading takes solitude and it takes focus.</p>
                    <button className="landing1-btn"><Link to="/signup" style={{textDecoration: "none"}}>Join Now</Link></button>
                </div>
                <div className="landing2">
                    <img src={earn1} alt='earn to pay'/>
                </div>
            </div>

            <div className="land2">
                <div className="land21">
                    <img src={earn2}/>
                </div>
                <div className="land22">
                    <h1>Get paid for reading all your favourite articles</h1>
                    <p>Sound too good to be true? Here’s the deal: Stores pay us a commission for sending you their way. We share that with you as Cash Back. Everyone wins!</p>
                </div>
            </div>

            <div className="land3">
                <h1>How it Works</h1>
                <div className="land3-div">
                    <div className="land3-div1">
                        <h2>Join</h2>
                        <p>Sign up for a free account in less than 30 seconds.</p>
                        <img src={earnw1}/>
                    </div>
                    <div className="land3-div1">
                        <h2>Read</h2>
                        <p>Start reading on rakuten.com, the Rakuten App or our extension.</p>
                        <img src={earnw2}/>
                    </div>
                    <div className="land3-div1">
                        <h2>Earn</h2>
                        <p>Watch your Cash Back balance grow, then get paid via check or PayPal.</p>
                        <img src={earnw3}/>
                    </div>
                </div>
            </div>

            <div className="land4">
                <div className="land4-div1">
                    <div className="land4-div11">
                        <img src={earnb1}/>
                    </div>
                    <div className="land4-div12">
                        <h3>We’ve paid members over $2 billion in Cash Back</h3>
                        <p>There’s a reason we’re the #1 Cash Back shopping companion. Don’t believe us? Just ask our community of 15+ million members.</p>
                    </div>
                </div>
                <div className="land4-div1 land4-order">
                    <div className="land4-div12">
                        <h3>More for you, all with Cash Back</h3>
                        <p>Earn on everything from reading news, articles, novels and blogs. We’ll find you deals on more brands, apps and services so you can shop easy.</p>
                    </div>
                    <div className="land4-div11">
                        <img src={earnb2}/>
                    </div>
                </div>
                <div className="land4-div1">
                    <div className="land4-div11">
                        <img src={earnb3}/>
                    </div>
                    <div className="land4-div12">
                        <h3>Read whenever you want, however you want</h3>
                        <p>Read smarter doesn’t have to be harder. Start with Read to Earn via desktop, the App or our extension and let us do the deal-finding for you.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Landingpage;