import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Mary Copper',
      role: 'CFO DIRECTOR',
      text: 'Trust and integrity are what come to mind in our relationship with LaundryCity. We need good partner relations with our vendors.',
      avatar: '👩'
    },
    {
      name: 'Sharon Mitchell',
      role: 'HOUSEKEEPER',
      text: 'LaundryCity is the most professional and organized laundry company I have ever had the pleasure of working with.',
      avatar: '👨'
    },
    {
      name: 'Marilyn Coomer',
      role: 'ADMINISTRATOR',
      text: 'I used LaundryCity for the first time yesterday after reading some of their reviews. I have to say that I was highly satisfied with their services.',
      avatar: '👩'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="testimonials-title">JOIN THOUSANDS<br/>HAPPY CUSTOMERS</h2>
        <div className="testimonials-carousel">
          <div className="testimonials-wrapper" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
        <div className="testimonials-controls">
          <button onClick={prevSlide} className="control-btn">‹</button>
          <button onClick={nextSlide} className="control-btn">›</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
