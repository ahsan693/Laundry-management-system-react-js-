import React from 'react';
import './ServicesYouLove.css';

const ServicesYouLove = () => {
  const services = [
    { icon: '🚚', title: 'Drop off', subtitle: 'Laundry' },
    { icon: '👔', title: 'Free Pick-Up', subtitle: '& Delivery' },
    { icon: '♻️', title: 'Eco-Friendly', subtitle: 'Products' }
  ];

  return (
    <section className="services-you-love">
      <div className="services-love-container">
        <div className="services-love-left">
          <h3 className="services-love-subtitle">services you will love</h3>
          <p className="services-love-description">
            Experience convenient laundry services designed for your busy lifestyle in Islamabad. 
            We offer flexible pickup and delivery options, eco-friendly cleaning products, 
            and professional care for all your garments.
          </p>
          <div className="services-love-items">
            {services.map((service, index) => (
              <div key={index} className="service-love-item">
                <div className="service-love-icon">{service.icon}</div>
                <div className="service-love-text">
                  <div className="service-love-title">{service.title}</div>
                  <div className="service-love-subtitle">{service.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="discover-btn">Discover More</button>
        </div>
        <div className="services-love-right">
          <img 
            src="https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=800&q=80" 
            alt="Professional laundry service" 
            className="services-love-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesYouLove;
