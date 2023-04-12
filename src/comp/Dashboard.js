import React from 'react';
import './Dashboard.css';
import Header from '../Component/Header'
import Footer from '../Component/Footer'

import { Link } from 'react-router-dom';

function Dashboard(){

    return(
        <>
<Header/>
            <div class="dash-main">
            <div class="dash-main-container">
                <div class="dash-main1">
                    <div class="dash-main1-div">
                        <div class="dash-main1-div-txt">Dashboard</div>
                        <Link to='/links' style={{textDecoration:'none'}}><div class="dash-main1-div1">
                            Links
                        </div></Link>
                        <div class="dash-main1-div1">
                            Articles
                        </div>
                        <div class="dash-main1-div1">
                            Sign-Up
                        </div>
                        <div class="dash-main1-div1">
                            Login-In
                        </div>
                        <div class="dash-main1-div1">
                            Home
                        </div>
                        <div class="dash-main1-div1">
                            Dashboard
                        </div>
                    </div>
                </div>
                <div class="dash-main2">
                    <div class="dash-main2-container">
                        <div class="dash-main2-div1">
                            <div class="dash-main2-div1a">
                                Earnings
                            </div>
                            <div class="dash-main2-div1a">
                                Rewards
                            </div>
                            <div class="dash-main2-div1a">
                                Gifts
                            </div>
                            <div class="dash-main2-div1a">
                                Refferal
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <Footer/>
        </>
    )
}

export default Dashboard;