// Header.js

import React from 'react';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">     
      <div className="container-fluid d-flex align-items-center justify-content-between max-ww">
        <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
          <img src="assets/img/starkLoogo.svg" alt="" />
          <h1 className="myfont">MustafaCem</h1>
          <img src="assets/img/starkLoogo.svg" alt="" />
        </Link>
        <nav id="navbar" className="navbar">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>      
            <Link to="/portfolio">portfolio</Link>
            <Link to="/services">services</Link>
            <Link to="/contact">contact</Link>
          </ul>
        </nav>

        <div className="header-social-links">
          <a href="www.linkedin.com/in/mustafacemm" target="_blank" rel="noopener noreferrer" className="linkedin"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com/mctNN" target="_blank" rel="noopener noreferrer" className="github"><i className="bi bi-github"></i></a>
          <a href="https://x.com/mct_NN" target="_blank" rel="noopener noreferrer" className="twitter"><i className="bi bi-twitter"></i></a>
          <a href="https://www.instagram.com/mustafacemtaskinn/" target="_blank" rel="noopener noreferrer" className="instagram"><i className="bi bi-instagram"></i></a>
          <div className="line">|</div>
          <Link to="/tr" className="linkedin myletter mybold">Tr</Link>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;
