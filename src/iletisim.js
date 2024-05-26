import React from 'react';

const Iletisim = () => {
  return (
    <main id="main" data-aos="fade" data-aos-delay="500">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="myfont myletter">İletişim</h2>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" className="contact">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4 className="myfont myletter">Konum:</h4>
                  <p>Kocaeli / Türkiye</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4 className="myfont myletter">E-posta:</h4>
                  <p>cemtaskin36@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4 className="myfont myletter">Telefon:</h4>
                  <p>+90 535 689 6792</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-lg-9">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Adınız" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="E-posta Adresiniz" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Konu" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Mesajınız" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Yükleniyor</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Mesajınız gönderildi. Teşekkür ederiz!</div>
                </div>
                <div className="text-left"><button type="submit" className="myBtn myfont myletter">Mesaj Gönder</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Iletisim;
