import React from 'react';
import './MobileApp.css';

const MobileApp = () => {
  return (
    <section className="mobile-app">
      <div className="mobile-app-container">
        <div className="mobile-app-content">
          <p className="mobile-app-subtitle">don't miss our new application</p>
          <h2 className="mobile-app-title">Get Our Mobile Apps for Easy and Convenient Usage</h2>
          <div className="app-buttons">
            <button className="app-btn apple-btn">
              <span className="app-icon">🍎</span>
              <div className="app-text">
                <span className="app-download">Download on the</span>
                <span className="app-store">Apple Store</span>
              </div>
            </button>
            <button className="app-btn google-btn">
              <span className="app-icon">▶</span>
              <div className="app-text">
                <span className="app-download">Download on the</span>
                <span className="app-store">Google Play</span>
              </div>
            </button>
          </div>
        </div>
        <div className="mobile-app-image">
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800" 
            alt="Woman using mobile app"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
