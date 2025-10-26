import React from 'react';
import Footer from '../components/Footer';
import './About.css';

const About = () => (
  <div className="about-page">
    <div className="about-card">
      <h1 className="about-title">
        <span className="gradient-text">About Form Builder</span>
      </h1>
      <p className="about-desc">
        Welcome to <strong>Form Builder</strong> — a modern, creative platform to craft custom forms with zero coding. <br /><br />
        <span className="about-highlight">Drag, drop, and personalize</span> fields like Name, Address, Phone, Email, Currency, and more, using a visually rich and intuitive interface. Instantly preview your forms and unlock endless possibilities for surveys, registrations, feedback, and data collection.
        <br /><br />
        <em>Let your creativity lead the way—vivid colors, smooth navigation, and secure user accounts make your form building experience fun and professional.</em>
        <br /><br />
        Whether you're a student, a business owner, or just organizing an event, Form Builder is designed to make your work easier and more colorful!
      </p>
      <div className="about-features">
        <div className="feature-chip">🎨 Vibrant UI</div>
        <div className="feature-chip">👆 Drag & Drop</div>
        <div className="feature-chip">🔒 Secure Login</div>
        <div className="feature-chip">🚀 Fast & Responsive</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
