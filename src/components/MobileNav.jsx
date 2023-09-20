import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../img/logo.jpg'; // Replace with your logo image path
// import '../styles/MobileNav.css'; 

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`mobile-nav container ${isOpen ? 'open' : ''}`}>
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
      <div className={`mobile-li ${isOpen ? 'open' : ''}`} id="mobile">
        <ul>
          <li>Home</li>
          <li>Class</li>
          <li>Collage</li>
          <li>Service</li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
