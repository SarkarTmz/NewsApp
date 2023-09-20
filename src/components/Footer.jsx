import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
        <footer className='footer section'>
            <div className="footer-list container">
                <ul>
                    <h4>Quick Links</h4>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Follow Us</li>
                </ul>
                <ul>
                    <h4>Customer Care</h4>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Return & Refund</li>
                    <li>Contact Us</li>
                </ul>
        
                <ul>
                    <h4>Affiliate With Us</h4>
                    <li>Sale on Amazon</li>
                    <li>Whole Sale</li>
                    <li>Request Outlet</li>
                    <li>CRT</li>
                </ul>
                <ul>
                    <h4>Quick Links</h4>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Follow Us</li>
                </ul>
            </div>
            <div className='credit'>
            <p>All Copyright Reserved</p>
            <p>Made By <a href="https://sonamtamang.netlify.app/" target="_blank">Sonam Tamang</a></p>
            </div>
        </footer>
    </>
  )
}

export default Footer