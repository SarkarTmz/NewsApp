import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../img/logo.jpg';
import Home from './Home';

const Header = ()=>{
  return (
      <>  
        <div className='main'>
          <nav className='nav container'>
                <Link to="/"><img src={logo} alt="" className='logo' /></Link>
                  <div className='ul'>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
              </nav>
        </div>  
            <div className="mobile-nav container">
            <Link to="/"><img src={logo} alt="" className='mobile-logo' /></Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bar">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>

          <div className="main2">
            <div className="headline">
              <ul>
                    <li><Link to="sport">Sport & E-Esport</Link></li>
                    <li><Link to="/business">Economics & Business</Link></li>
                    <li><Link to="/science">Science & Technology</Link></li>
                    <li><Link to="/social">Social Issues</Link></li>
                    <li><Link to="/entertainment">Entertainment</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    
                  </ul>
            </div>
            </div>

  

             {/* <div className="mobile-li" id='mobile'>
               <ul>
                 <li>Home</li>
                 <li>Class</li>
                 <li>Collage</li>
                 <li>Service</li>
               </ul>
             </div> */}
    </>
  );
}

export default Header;


