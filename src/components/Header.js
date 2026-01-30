import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './Header.css';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-circle"></div>
          </div>
          <span className="logo-text">
            <span className="logo-laundry">laundry</span>
            <span className="logo-city">city</span>
            <span className="logo-tagline">LAUNDRY & CLEAN</span>
          </span>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <button className="mobile-close" onClick={closeMobileMenu}>×</button>
          <a href="#home" className="nav-link" onClick={closeMobileMenu}>HOME PAGE</a>
          <a href="#features" className="nav-link" onClick={closeMobileMenu}>FEATURES</a>
          <a href="#about" className="nav-link" onClick={closeMobileMenu}>ABOUT</a>
          <a href="#services" className="nav-link" onClick={closeMobileMenu}>SERVICES</a>
          <a href="#pricing" className="nav-link" onClick={closeMobileMenu}>PRICING</a>
          <a href="#testimonials" className="nav-link" onClick={closeMobileMenu}>TESTIMONIALS</a>
          <a href="#news" className="nav-link" onClick={closeMobileMenu}>NEWS</a>
          <a href="#contacts" className="nav-link" onClick={closeMobileMenu}>CONTACTS</a>
        </nav>

        {isMobileMenuOpen && <div className="mobile-overlay" onClick={closeMobileMenu}></div>}

        <div className="header-right">
          <div className="contact-info">
            <div className="hours">
              <span className="icon">🕐</span>
              <span className="hours-text">8:00-18:00 Mon-Sat</span>
            </div>
            <div className="phone">
              <span className="icon">📞</span>
              <span className="phone-text">+92 349 893 2839</span>
            </div>
          </div>
          <button 
            className="dark-mode-toggle" 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button className="schedule-btn">Schedule Pick-Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
