import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="site-footer clearfix">
        <div className="social-contact">
          <div className="social-icons">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a
                  href="https://www.facebook.com/phandinhhuyit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://twitter.com/PhanDinhHuy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/phandinhhuyit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.facebook.com/phandinhhuyit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.facebook.com/phandinhhuyit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
