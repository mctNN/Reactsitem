import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main id="main" data-aos="fade" data-aos-delay="500">
    <section id="about" className="about">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/portfolio/pp.png" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-5 content myHover">
            <h2 className="myfont myletter">Web Developer & Jr.Mobile Developer</h2>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>24 Jul 2002</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.starkbilisim.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+90 535 689 6792</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>KOCAELİ / İZMİT</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>junior</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>cemtaskin36@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
            Hello, I am Mustafa Cem Taşkın. I was born in 2002 in Kocaeli. I completed my high school education at Sabancı Vocational and Technical Anatolian High School and my associate degree in Computer Programming at Karasu Vocational School, which is affiliated with Sakarya University of Applied Sciences.
            </p>
            <Link to="/Profile.pdf" target="_blank" className="myBtn myfont myletter">CV</Link>
            <a href="mailto:cemtaskin36@gmail.com" className="myBtn myfont myletter">MAIL</a>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}

export default About;
