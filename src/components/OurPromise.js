import React from 'react';
import './OurPromise.css';

const OurPromise = () => {
  const promises = [
    {
      icon: '💙',
      title: '100% Happiness Guarantee',
      description: "If you're not completely satisfied with the wash or dry cleaning, we will re-wash your clothes for free!"
    },
    {
      icon: '⚡',
      title: 'Fast & High Quality',
      description: 'We work hard to make sure that the clothes you get back are spotless and ready for action.'
    },
    {
      icon: '🌿',
      title: 'Cleaner & Greener',
      description: 'We work with the environment in mind. No harsh chemicals, only eco-friendly detergents that are gentle on your clothes and the planet.'
    }
  ];

  return (
    <section className="our-promise" id="about">
      <div className="our-promise-container">
        <div className="our-promise-left">
          <div className="promise-video">
            <img 
              src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600" 
              alt="Laundry service"
              className="promise-image"
            />
            <div className="play-button">▶</div>
          </div>
          <p className="promise-caption">Discover why thousands of people trust us to care for their clothes!</p>
        </div>
        <div className="our-promise-right">
          <h2 className="promise-section-title">OUR PROMISE</h2>
          <div className="promises-list">
            {promises.map((promise, index) => (
              <div key={index} className="promise-item">
                <div className="promise-icon">{promise.icon}</div>
                <div className="promise-content">
                  <h3 className="promise-title">{promise.title}</h3>
                  <p className="promise-description">{promise.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
