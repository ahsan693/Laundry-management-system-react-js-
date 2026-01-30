import React from 'react';
import './DeliveryFeatures.css';

const DeliveryFeatures = () => {
  const features = [
    {
      title: 'We Delivered',
      subtitle: 'in 24 or 48 hrs',
      description: 'Fast and reliable delivery service across Islamabad. Schedule your pickup and delivery at your convenience.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400'
    },
    {
      title: 'We Offer Flexible',
      subtitle: 'Price Range',
      description: 'Affordable pricing packages for all budgets. Quality laundry service without breaking the bank in Islamabad.',
      image: 'https://images.unsplash.com/photo-1469504512102-900f29606341?w=400'
    },
    {
      title: 'Helpful & Friendly',
      subtitle: 'Attendants',
      description: 'Our professional team is trained to handle your clothes with care. Customer satisfaction is our priority.',
      image: 'https://images.unsplash.com/photo-1560472355-109703aa3edc?w=400'
    }
  ];

  return (
    <section className="delivery-features" id="features">
      <div className="container">
        <h2 className="section-title">FEATURED SERVICES</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-image-container">
                <img src={feature.image} alt={feature.title} className="feature-image" />
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-subtitle">{feature.subtitle}</p>
                <p className="feature-description">{feature.description}</p>
                <a href="/services" className="read-more">Read More →</a>
              </div>
            </div>
          ))}
        </div>
        <button className="more-services-btn">More About Services</button>
      </div>
    </section>
  );
};

export default DeliveryFeatures;
