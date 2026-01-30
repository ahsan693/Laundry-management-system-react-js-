import React from 'react';
import './FeaturedServices.css';

const FeaturedServices = () => {
  const services = [
    {
      icon: '🧺',
      title: 'Wash & Fold',
      subtitle: 'Laundry Service',
      description: 'Professional washing, drying, and folding services. We handle your clothes with care using premium detergents and fabric softeners.'
    },
    {
      icon: '👔',
      title: 'Commercial',
      subtitle: 'Laundry Service',
      description: 'Bulk laundry solutions for hotels, restaurants, and businesses in Islamabad. Reliable service with quick turnaround times.'
    },
    {
      icon: '👕',
      title: 'Eco-Friendly',
      subtitle: 'Dry Cleaning',
      description: 'Gentle dry cleaning using environmentally safe solvents. Perfect for delicate fabrics and special garments.'
    },
    {
      icon: '🏪',
      title: 'Self Service and',
      subtitle: 'Laundromat',
      description: 'Modern self-service facility with high-efficiency washers and dryers. Available at our H-9 Islamabad location.'
    }
  ];

  return (
    <section className="featured-services" id="services">
      <div className="container">
        <h2 className="section-title">FEATURED SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">{service.description}</p>
              <button className="service-btn">More Info</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
