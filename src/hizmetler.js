import React from 'react';

const Hizmetler = () => {
  return (
    <main id="main" data-aos="fade" data-aos-delay="500">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="myfont myletter">Hizmetler</h2>
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
                <h4><a href="" className="stretched-link myfont myletter mybold">Kurumsal Web Siteleri</a></h4>
                <p className="mybold">Markanızı güçlendirin, etkileşimli kurumsal web siteleri ile.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="service-item position-relative">
                <i className="bi bi-phone"></i>
                <h4><a href="" className="stretched-link myfont myletter mybold">Mobil Uygulamalar</a></h4>
                <p className="mybold">Kullanıcı dostu, güvenli ve etkili uygulamalar tasarlamak ve programlamak.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="service-item position-relative">
                <i className="bi bi-brush"></i>
                <h4><a href="" className="stretched-link myfont myletter mybold">Grafik Tasarım</a></h4>
                <p className="mybold">Marka, özünü vurgulayan basit ve akılda kalıcı bir sembol oluşturmayı amaçlar.</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 d-flex">
              <div className="service-item position-relative">
                <i className="bi bi-camera-reels"></i>
                <h4><a href="" className="stretched-link myfont myletter mybold">Video Düzenleme</a></h4>
                <p className="mybold">Video düzenleme, etkileyici ve akıcı bir hikaye yaratma sürecidir. Yaratıcı ve önemli bir üretim adımıdır.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hizmetler;
