import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import '../styles/MobileNav.css'; 
import { NavLink } from 'react-router-dom';


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <nav className= "mobile-nav container">
      <Link to="/">
        <img src={logo} alt="" className="mobile-logo" />
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="bar"
        onClick={toggleMenu}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <div className= {isOpen ? "mobile-li" : "menu-li"}  id="mobile">
        <ul>
          <NavLink to="/sport">
            Sport & E-Sport
          </NavLink>
          <NavLink to="/business">
            Economics & Business
          </NavLink>
          <NavLink to="/science">
            Science & Technology
          </NavLink>
          <NavLink to="/social">
            Social Issues
          </NavLink>
          <NavLink to="/entertainment">
            Entertainment
          </NavLink>
          <NavLink to="/education">
            Education
          </NavLink>
          </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
