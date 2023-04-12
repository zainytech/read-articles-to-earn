import React from 'react';
import './Links.css'
import { Link } from 'react-router-dom';
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Links(){
    return(
        <>
        <Header/>
        <div class="links-main">
            <div class="links-main-container">
                <div class="links-div1">
                    ARTICLES
                </div>
                <div class="links-div2">
                    <div class="links-div2-container">
                    <Link to='/article' state={{ from: "https://youtu.be/8p7t8L-WDd0" }} style={{textDecoration:'none'}}><div class="links-div2a">
                        Click on this link to get an article through which you can earn money by just reading the whole article.
                    </div></Link>
                    <Link to='/article' state={{ from: "https://youtu.be/bRrIhgn52m0" }} style={{textDecoration:'none'}}><div class="links-div2a">
                        Click on this link to get an article through which you can earn money by just reading the whole article.
                    </div></Link>
                    <Link to='/article' state={{ from: "https://youtu.be/nd2_HP0NtL8" }} style={{textDecoration:'none'}}><div class="links-div2a">
                        Click on this link to get an article through which you can earn money by just reading the whole article.
                    </div></Link>
                    <Link to='/article' state={{ from: "https://youtu.be/uHho4f5NykU" }} style={{textDecoration:'none'}}><div class="links-div2a">
                        Click on this link to get an article through which you can earn money by just reading the whole article.
                    </div></Link>
                    <Link to='/article' state={{ from: "https://youtu.be/giQ8k2uCoK8" }} style={{textDecoration:'none'}}><div class="links-div2a">
                        Click on this link to get an article through which you can earn money by just reading the whole article.
                    </div></Link>
                    <Link to='/article' state={{ from: "https://youtu.be/EwMarg2orPw" }} style={{textDecoration:'none'}}><div class="links-div2a">
                        Click on this link to get an article through which you can earn money by just reading the whole article.
                    </div></Link>
                    <Link to='/article' state={{ from: "https://youtu.be/SI2b1i_5UEI" }} style={{textDecoration:'none'}}><div class="links-div2a">
                        Click on this link to get an article through which you can earn money by just reading the whole article.
                    </div></Link>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}
export default Links;