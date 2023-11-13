import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../img/logo.jpg';
import Home from '../pages/header-page/Home';
import MobileNav from './MobileNav';


const Header = ()=>{
  return (
      <>  
        <div className='main'>
          <nav className='nav container'>
                <Link to="/"><img src={logo} alt="" className='logo' /></Link>
                  <div className='ul'>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/breaking">Breaking News</Link></li>
                      <li><Link to="/addnews">Add News</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
              </nav>
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

        

          <MobileNav />
          </>
  );
}

export default Header;


