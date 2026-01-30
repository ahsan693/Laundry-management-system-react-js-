import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Newsletter Subscribe"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-btn">Sign Up</button>
        </form>
        <div className="social-icons">
          <a href="#" className="social-icon facebook">f</a>
          <a href="#" className="social-icon google">G+</a>
          <a href="#" className="social-icon twitter">🐦</a>
          <a href="#" className="social-icon youtube">▶</a>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
