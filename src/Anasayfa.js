// anasayfa.js

import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./assets/img/system.conf.jpg";

const Anasayfa = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          opacity: "40%",
        }}
      ></div>

      <div id="large-header" className="large-header">
        <div className="mainContainer">
          <h1 className="myletter myfont myTextAlign mysecim">
            Web developer & Jr.Mobile developer
          </h1>
          <p className="myTextAlign mysecim">
          Merhaba, ben Mustafa Cem Taşkın, 2002 yılında Kocaelin'de doğdum. Lise eğitimimi *Sabancı Mesleki Ve Teknik Anadolu Lisesinde*, Ön Lisans eğitimimi ise *Sakarya Uygulamalı Bilimler Üniversitesine* bağlı *Karasu Meslek Yüksekokulu'nda Bilgisayar Programcılığı* bölümünde tamamladım.
          </p>
          <Link to="/contact" className="myBtn myfont myletter">
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Anasayfa;
