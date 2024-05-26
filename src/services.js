import React from 'react';

const Services = () => {
  return (
    <main id="main" data-aos="fade" data-aos-delay="500">
    <div className="page-header d-flex align-items-center">
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <h2 className="myfont myletter">Services</h2>
          </div>
        </div>
      </div>
    </div>
    <section id="services" className="services">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-3 col-md-6 d-flex">
            <div className="service-item position-relative">
              <i className="bi bi-window-fullscreen"></i>
              <h4><a href="#" className="stretched-link myfont myletter mybold">Corporate Websites</a></h4>
              <p className="mybold">Strengthen your brand with reliable and interactive corporate websites</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 d-flex">
            <div className="service-item position-relative">
              <i className="bi bi-phone"></i>
              <h4><a href="#" className="stretched-link myfont myletter mybold">Mobile Applications</a></h4>
              <p className="mybold">Designing and programming user-friendly, secure, and effective applications.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 d-flex">
            <div className="service-item position-relative">
              <i className="bi bi-brush"></i>
              <h4><a href="#" className="stretched-link myfont myletter mybold">Graphic design</a></h4>
              <p className="mybold">Mark aims to create a simple and memorable symbol that highlights its essence.</p>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 d-flex">
            <div className="service-item position-relative">
              <i className="bi bi-camera-reels"></i>
              <h4><a href="#" className="stretched-link myfont myletter mybold">Video Editing</a></h4>
              <p className="mybold">Video editing is the process of creating a compelling and seamless story. It is a creative and vital production step</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}

export default Services;
