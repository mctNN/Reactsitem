import React from "react";

const Portfolio = () => {

  return (
    <main id="main" data-aos="fade" data-aos-delay="500">
      <section id="gallery" className="gallery">
        <div className="container-fluid">
          {/* <div className="portdoliobaslik myfont myletter">Active Websites</div> */}
          <div className="row gy-4 justify-content-flex-end">

            <div className="col-xl-3 col-lg-4 col-md-6 myprojewith">
              <div className="gallery-item h-100">
                <img
                  src="assets/img/gallery/marmelat.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>


            <div className="col-xl-3 col-lg-4 col-md-6 myprojewith">
              <div className="gallery-item h-100">
                <img
                  src="assets/img/gallery/marmelat.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>


          {/* <div className="portdoliobaslik myfont myletter">
            Completed Projects
          </div>
          <div className="row gy-4 justify-content-flex-end">
      
          </div>
          <div className="portdoliobaslik myfont myletter">
            Ongoing Projects
          </div>
          <div className="row gy-4 justify-content-flex-end">
           
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
