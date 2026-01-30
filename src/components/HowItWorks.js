import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    { number: '01', icon: '🚚', title: 'You Shedule a', subtitle: 'Pick-Up' },
    { number: '02', icon: '💧', title: 'We Wash, Dry, Fold', subtitle: 'Your Dirty Laundry' },
    { number: '03', icon: '👕', title: 'We Return Your', subtitle: 'Clean Laundry' },
    { number: '04', icon: '☕', title: 'You Enjoy', subtitle: 'Your Free Time' }
  ];

  return (
    <section className="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-left">
          <img 
            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600" 
            alt="Folded laundry" 
            className="how-it-works-image"
          />
        </div>
        <div className="how-it-works-right">
          <h3 className="how-it-works-subtitle">how it works</h3>
          <p className="how-it-works-description">
            Getting your laundry done has never been easier! Our simple 4-step process 
            ensures your clothes are cleaned professionally and returned fresh. Book online 
            or call us at +92 349 893 2839 to get started.
          </p>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-subtitle">{step.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
