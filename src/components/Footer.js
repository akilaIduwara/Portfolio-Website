import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Column 1: Brand & Socials */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img
                src="/imges/logo-main.png"
                alt="Aikoo Solutions Logo"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-description">
              We help ambitious entrepreneurs concept, craft and launch ideas across digital products. On a mission to make the digital age more human friendly.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/akilaIduwara" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/akila-induwara/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/akil_induwara" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="footer-col links-col">
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-col links-col">
            <h3 className="footer-col-title">Resources</h3>
            <ul className="footer-links-list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms and Condition</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Find Us */}
          <div className="footer-col contact-col">
            <h3 className="footer-col-title">Find Us</h3>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <FaClock className="contact-icon" />
                <span className="contact-text">Monday - Sunday: 24 x 7</span>
              </li>
              <li className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <a href="tel:+94712025476" className="contact-text link-text">+94 71 202 5476</a>
              </li>
              <li className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:k.a.akilainduwara@gmail.com" className="contact-text link-text">k.a.akilainduwara@gmail.com</a>
              </li>
              <li className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span className="contact-text">Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Akila Induwara Kaluarachchi. All Rights Reserved.</p>
          <p className="built-by">Built with React &amp; ❤️ by Aikoo Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
