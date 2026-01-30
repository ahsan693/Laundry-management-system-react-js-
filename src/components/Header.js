import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import './Header.css';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

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

        <nav className="nav-menu">
          <a href="#home" className="nav-link">HOME PAGE</a>
          <a href="#features" className="nav-link">FEATURES</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#services" className="nav-link">SERVICES</a>
          <a href="#pricing" className="nav-link">PRICING</a>
          <a href="#testimonials" className="nav-link">TESTIMONIALS</a>
          <a href="#news" className="nav-link">NEWS</a>
          <a href="#contacts" className="nav-link">CONTACTS</a>
        </nav>

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
