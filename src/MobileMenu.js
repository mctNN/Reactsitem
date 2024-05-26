// MobileMenu.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./MobileMenu.css"; // CSS dosyanızın gerçek yolunu kullanın

const MobileMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-menu">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      {isMenuOpen && (
        <div className="menu-items">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">portfolio</Link>
          <Link to="/services">services</Link>
          <Link to="/contact">contact</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
