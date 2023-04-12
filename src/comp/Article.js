import React from 'react';
import './Article.css';
import './Timer/Timer.css'
import CountdownTimer from './Timer/CountdownTimer';
import { useState } from 'react';
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import adbanner from './assets/ad-banner.jpeg'
import adbanner2 from './assets/ad-banner2.jpg'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Article(){
    const THREE_MINS_IN_MS = 1 * 1 * 2 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
  
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_MINS_IN_MS;

    const location = useLocation()
    const { from } = location.state
  

    return(
        <>
        <Header/>
        <div class="article-main">
            <div class="article-main-div1">
                <div class="article-main-div1-container">
                    <div class="article-main-div1a">
                        <div class="article-main-div1a-img">
                            <img src={adbanner}></img>
                        </div>
                    </div>
                    <div class="article-main-div1b">
                        <span class="article-main-div1b-txt">Claim Reward after 2 mins!!!</span>
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                    </div>
                </div>
            </div>
            <div class="article-main-div2">
                <div class="article-main-div2-container">
                <ReactPlayer  height="100%" width="100%" url={from} playing={true} controls={true} muted={true}/>
                </div>
            </div>
            <div class="article-main-div3">
                <div class="article-main-div3-container">
                    <div class="article-main-div3-img">
                        <img src={adbanner2}></img>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

        </>
    )
}

export default Article;