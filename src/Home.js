// Anasayfa.js
import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./assets/img/system.conf.jpg";

const Home = () => {
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

      <div className="mainContainer">
        <h1 className="myletter myfont myTextAlign mysecim">
          Web developer & Jr.Mobile developer{" "}
        </h1>
        <p className="myTextAlign mysecim">
        Hello, I am Mustafa Cem Taşkın. I was born in 2002 in Kocaeli. I completed my high school education at Sabancı Vocational and Technical Anatolian High School and my associate degree in Computer Programming at Karasu Vocational School, which is affiliated with Sakarya University of Applied Sciences.
        </p>
        {/* Link ile "contact" sayfasına yönlendirme */}
        <Link to="/contact" className="myBtn myfont myletter">
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Home;
