import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../cssfiles/Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="nav-bar">
      <div className="nav-logo" id="logo">
        <img src='/logo.png' alt="Company logo with stylized text on a white background, conveying a welcoming and professional tone" className="logo-img" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-items">
        <Link to="/" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Home</Link>
      <Link to="/portfolio" className="nav-item" onClick={() => setMobileMenuOpen(false)}>portfolio</Link>
        <Link to="/blogs" className="nav-item" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
           </ul>
    </div>
  );
}
