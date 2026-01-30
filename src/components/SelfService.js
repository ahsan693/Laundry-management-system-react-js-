import React from 'react';
import './SelfService.css';

const SelfService = () => {
  return (
    <section className="self-service">
      <div className="self-service-container">
        <div className="self-service-left">
          <img 
            src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800" 
            alt="Woman doing laundry"
            className="self-service-image"
          />
        </div>
        <div className="self-service-right">
          <div className="self-service-content">
            <span className="price-badge">From Only<br/>$4.00</span>
            <h2 className="self-service-title">We Also Offer<br/>Self Service</h2>
            <h3 className="self-service-laundromat">LAUNDROMAT</h3>
            <div className="self-service-icons">
              <div className="service-icon-item">
                <span className="service-icon-img">🧺</span>
              </div>
              <div className="service-icon-item">
                <span className="service-icon-img">🏠</span>
              </div>
              <div className="service-icon-item">
                <span className="service-icon-img">💬</span>
              </div>
            </div>
            <button className="discover-more-btn">Discover More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfService;
