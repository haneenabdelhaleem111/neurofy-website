import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 mb-4">
            <Link to="/">
              <img
                src="/ImagesCompressed/logo.webp"
                alt="Neurofy Logo"
                className="footer-logo mb-2"
              />
            </Link>
            <p>Neurofy — Freedom Redefined!</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/epilepsy">
                  Awareness
                </Link>
              </li>

              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/ContactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>
              <Link
                to="mailto:contact@neurofy.puiux.org"
                className="FooterMail"
              >
                <img
                  src="/ImagesCompressed/mail.webp"
                  alt="mail"
                  className="footer-icons"
                />
                contact@neurofy.puiux.org
              </Link>
            </p>
            <p>
              <img
                src="/ImagesCompressed/phone.webp"
                className="footer-icons"
                alt="phone"
              />
              +20 1097291863
            </p>
            <p>
              <img
                src="/ImagesCompressed/location.webp"
                className="footer-icons"
                alt="location"
              />
              Mansoura, Ad dakahlia, Egypt
            </p>
            {/* //social media links in advnace//
            <div className="social-icons mt-3">
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </Link>
            </div>
            */}
          </div>
        </div>

        <hr className="border-top border-light" />
        <div className="text-center mt-3">
          <p className="mb-0">© 2025 Neurofy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
