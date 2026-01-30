import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contacts">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <div className="footer-logo-circle"></div>
            </div>
            <span className="footer-logo-text">
              <span className="footer-laundry">laundry</span>
              <span className="footer-city">city</span>
              <span className="footer-tagline">LAUNDRY & CLEAN</span>
            </span>
          </div>
          <p className="footer-description">
            Your trusted laundry partner in Islamabad. We provide professional 
            cleaning services with care and excellence.
          </p>
          <div className="footer-badges">
            <div className="badge">
              <span className="badge-icon">👍</span>
              <span className="badge-text">100%<br/>Guarantee</span>
            </div>
            <div className="badge">
              <span className="badge-icon">💰</span>
              <span className="badge-text">Best<br/>Prices</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🏆</span>
              <span className="badge-text">10 Years<br/>Experience</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li><a href="#services">Wash & Fold Service</a></li>
            <li><a href="#services">Dry Cleaning</a></li>
            <li><a href="#services">Commercial Laundry</a></li>
            <li><a href="#services">Self-Service Laundromat</a></li>
            <li><a href="#services">Ironing & Pressing</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Customer Care</h3>
          <ul className="footer-links">
            <li><a href="#contacts">Contact Us</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#news">News & Articles</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Use</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Call Now for Services!</h3>
          <p className="footer-phone">+92 349 893 2839</p>
          <a href="mailto:info@laundrycity.pk" className="footer-email">📧 Email Us</a>
          <div className="footer-address">
            <p className="address-title">LaundryCity Islamabad</p>
            <p className="address-text">H-9, Islamabad, Pakistan</p>
            <a href="https://maps.google.com/?q=H-9,Islamabad,Pakistan" target="_blank" rel="noopener noreferrer" className="get-direction">📍 Get Direction</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>ThemeBLX © 2016 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
