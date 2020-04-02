import React from "react";
import "./style.scss";
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="page-title">
        <h1>Contact</h1>
        <div className="page-subtitle">
          <h4>Get in Touch</h4>
        </div>
      </div>
      <div className="container">
        <div id="gmap" className="contact-map">
          <iframe
            title="address"
            src="https://maps.google.com/maps?q=Học viện Công+nghệ Bưu chính Viễn thông Cơ Sở Tại TP.Hồ Chí Minh&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameBorder="0"
            style={{ apsborder: "0" }}
            allowFullScreen=""
          ></iframe>
        </div>
        <div className="row">
          <div className=" col-xs-12 col-sm-6 ">
            <div className="info-block-w-icon">
              <div className="ci-icon">
                <i className="fa fa-mobile" aria-hidden="true"></i>
              </div>
              <div className="ci-text">
                <h4>Phone Numbers</h4>
                <p>
                  <a href="tel:0869 123 020">0961 9341 98</a>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 ">
            <div className="info-block-w-icon">
              <div className="ci-icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div className="ci-text">
                <h4>Email</h4>
                <p>
                  <a href="mailto:phandinhhuyit@gmail.com">
                    phandinhhuyit@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 ">
            <div className="info-block-w-icon">
              <div className="ci-icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div className="ci-text">
                <h4>Address</h4>
                <p>97 Man Thiện,Hiệp Phú,Quận 9,TP.Hồ Chí Minh</p>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 ">
            <div className="info-block-w-icon">
              <div className="ci-icon">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </div>
              <div className="ci-text">
                <h4>Facebook</h4>
                <p>
                  <a
                    href="https://www.facebook.com/phandinhhuyit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    fb.com/phandinhhuyit
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 ">
            <div className="info-block-w-icon">
              <div className="ci-icon">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </div>
              <div className="ci-text">
                <h4>Linkedin</h4>
                <p>
                  <a
                    href="https://www.linkedin.com/in/phandinhhuyit/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/phandinhhuyit
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className=" col-xs-12 col-sm-6 ">
            <div className="info-block-w-icon">
              <div className="ci-icon">
                <i className="fa fa-github" aria-hidden="true"></i>
              </div>
              <div className="ci-text">
                <h4>Github</h4>
                <p>
                  <a
                    href="https://github.com/phandinhhuyptit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/phandinhhuyptit
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
