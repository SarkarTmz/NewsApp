import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
        <footer className='footer section'>
            <div className="footer-list container">
                <ul>
                    <h3>Customer Care</h3>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Return & Refund</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <h3>Quick Links</h3>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Follow Us</li>
                </ul>
                <ul>
                    <h3>Affiliate With Us</h3>
                    <li>Sale on Amazon</li>
                    <li>Whole Sale</li>
                    <li>Request Outlet</li>
                    <li>CRT</li>
                </ul>
                <ul>
                    <h3>Quick Links</h3>
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