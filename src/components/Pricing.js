import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const prices = [
    { price: '$1.50', unit: 'Per Shirt', service: 'shirt service', icon: '👔', bg: '#E3F2FD' },
    { price: '$2', unit: 'Per Item', service: 'dry cleaning', icon: '🧥', bg: '#FFF3E0' },
    { price: '$2.50', unit: 'Per Pound', service: 'laundry service', icon: '⚖️', bg: '#F3E5F5' },
    { price: '$1.99', unit: 'Per Suit', service: 'corporate laundry', icon: '🤵', bg: '#E8F5E9' }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">AFFORDABLE PRICES</h2>
        <p className="pricing-subtitle">how much does it cost</p>
        <div className="pricing-grid">
          {prices.map((item, index) => (
            <div key={index} className="pricing-card" style={{ '--card-bg': item.bg }}>
              <div className="pricing-icon-wrapper" style={{ background: item.bg }}>
                <div className="pricing-icon">{item.icon}</div>
              </div>
              <div className="pricing-amount">
                <span className="price-label">From</span>
                <span className="price-value">{item.price}</span>
                <span className="price-unit">{item.unit}</span>
              </div>
              <p className="pricing-service">{item.service}</p>
              <button className="pricing-card-btn">Book Now</button>
            </div>
          ))}
        </div>
        <button className="view-price-btn">View Full Price List</button>
      </div>
    </section>
  );
};

export default Pricing;
