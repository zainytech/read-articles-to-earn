import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from './comp/Links';
import Article from './comp/Article';
import Dashboard from './comp/Dashboard';
import Landingpage from "./Component/Landingpage";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
function RouteConfig() {
 
  return <>
	<div>
      <BrowserRouter>

        <Routes>
      
        <Route path="/" element={<Landingpage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/links" element={<Links />} />
        <Route path="/article" element={<Article />} />
        


           </Routes>
            
    </BrowserRouter>
        
	</div>
  </>
  }
  
  export default RouteConfig;
