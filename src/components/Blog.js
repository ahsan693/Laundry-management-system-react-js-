import React from 'react';
import './Blog.css';

const Blog = () => {
  const articles = [
    {
      title: '10 Ways to Make Laundry Easier',
      date: '30 JAN 2026',
      description: 'Discover time-saving laundry tips and tricks. Learn how professional services in Islamabad can simplify your routine.',
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400&q=80'
    },
    {
      title: 'How to Decode Clothing Care Tags',
      date: '25 JAN 2026',
      description: 'Understanding care labels helps preserve your clothes. Expert guidance from LaundryCity Islamabad professionals.',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=80'
    },
    {
      title: '5 Ways to Free Up Your Time',
      date: '20 JAN 2026',
      description: 'Save hours every week with our pickup and delivery service. More time for what matters in your busy Islamabad lifestyle.',
      image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&q=80'
    }
  ];

  return (
    <section className="blog" id="news">
      <div className="container">
        <h2 className="section-title">FROM THE BLOG</h2>
        <div className="blog-grid">
          {articles.map((article, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image-container">
                <img src={article.image} alt={article.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{article.title}</h3>
                <p className="blog-date">{article.date}</p>
                <p className="blog-description">{article.description}</p>
                <a href="#" className="blog-read-more">Read More →</a>
              </div>
            </div>
          ))}
        </div>
        <button className="more-articles-btn">More Articles</button>
      </div>
    </section>
  );
};

export default Blog;
