// MobileMenu.js
import React, { useState } from "react";
import "./MobileMenu.css"; // CSS dosyanızın gerçek yolunu kullanın
import { Link } from "react-router-dom";

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
          <Link to="/tr">Anasayfa</Link>
          <Link to="/tr/hakkimda">Hakkımda</Link>
          <Link to="/tr/portföy">Portföy</Link>
          <Link to="/tr/hizmetler">Hizmetler</Link>
          <Link to="/tr/iletisim">İletişim</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
