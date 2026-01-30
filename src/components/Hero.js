import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1600&q=80',
      alt: 'Fresh laundry in basket'
    },
    {
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=1600&q=80',
      alt: 'Modern laundry room'
    },
    {
      image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=1600&q=80',
      alt: 'Clean folded towels'
    },
    {
      image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1600&q=80',
      alt: 'Laundry service professional'
    },
    {
      image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=1600&q=80',
      alt: 'Fresh clean clothes'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`
            }}
          />
        ))}
      </div>
      
      <button className="carousel-control prev" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className="carousel-control next" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>
      
      <div className="hero-content">
        <h1 className="hero-title">Wash, Dry & Fold</h1>
        <p className="hero-description">
          LaundryCity is a service you can trust. Our attendants are highly
          trained and your satisfaction is always guaranteed.
        </p>
        <button className="hero-btn">Learn More</button>
      </div>
      
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
