import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return(
        <>
            <div className="header">
                <div className="hedaer1"><Link to='/' style={{textDecoration: 'none', color: "blue"}}>Read to Earn</Link></div>
                <div className="header2">
                    <div><Link to='/dashboard' style={{textDecoration: 'none', color: "blue"}}>Dashboard</Link></div>
                    <div><Link to='/signin' style={{textDecoration: 'none', color: "blue"}}>SignIn</Link></div>
                    <div><Link to='/signup' style={{textDecoration: 'none', color: "blue"}}>SignUp</Link></div>
                </div>
            </div>
        </>
    );
}

export default Header;