import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyAbout from "./about";
import Portfolio from "./portfolio";
import Services from "./services";
import Contact from "./contact";

import Header from "./Header";
import Anasayfa from "./Anasayfa";
import Headers from "./Headertr"; // Headers ekledik
import Hakkimda from "./hakkimda";
import Hizmetler from "./hizmetler";
import Portföy from "./portföy";
import Iletisim from "./iletisim";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<MyAbout />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Farklı Header için özel yol */}
        <Route
          path="/tr/*"
          element={
            <>
             
              <Headers />
            
              <Routes>
                <Route path="/" element={<Anasayfa />} />
                <Route path="/hakkimda" element={<Hakkimda />} />
                <Route path="/hizmetler" element={<Hizmetler />} />
                <Route path="/portföy" element={<Portföy />} />
                <Route path="/iletisim" element={<Iletisim />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
