import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { s } from "../assets/index";

const Footer = () => {
  return (
    <footer id="Footer" className="footer section">
      <div className="footer-content">
        <div className="footer-column">
        <img src={s} alt="Logo" className="w-28 h-28 rounded-md ml-10" />
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li>
              <a href="#who-we-are">Who We Are</a>
            </li>
            <li>
              <a href="#our-values">Values</a>
            </li>
            <li>
              <a href="#our-policies">Policies</a>
            </li>
            <li>
              <a href="#dct-guild">DCT Guild</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <p
            className="footer-contact"
            style={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            Office
          </p>
          <p className="footer-contact" style={{ marginBottom: "15px" }}>
            +974 4002 3092
          </p>
          <p
            className="footer-contact"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Mobile
          </p>
          <p className="footer-contact" style={{ marginBottom: "15px" }}>
            +974 3383 2999
          </p>
          <p
            className="footer-contact"
            style={{ marginBottom: "10px", fontWeight: "bold" }}
          >
            Email
          </p>
          <a
            href="mailto:info@dct.com.qa"
            className="footer-contact underline cursor-pointer"
          >
            info@dct.com.qa
          </a>
        </div>
        <div className="footer-column">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/dctinqa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/imane-o-587b8579/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            {/* <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a> */}
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <p className="footer-copyright">
        Commercial Registration No. 156808 | PO Box 31928, Doha – Qatar
      </p>
    </footer>
  );
};

export default Footer;
