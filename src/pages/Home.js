import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1 className="home-title">
          <span className="main-gradient">Build Smarter Forms</span><br />with <span className="highlight">Colorful Simplicity</span>
        </h1>
        <p className="subtitle">
          Create dynamic, custom forms in seconds.<br />
          <span className="fun-font">No coding. Just creativity.</span>
        </p>
        <button className="home-btn" onClick={() => navigate('/form-builder')}>
          <span role="img" aria-label="bolt">⚡</span> Start Building
        </button>
      </div>
      <div className="features-row">
        <div className="feature-card">
          <span role="img" aria-label="drag" className="feature-icon">🔧</span>
          <h3>Easy Customization</h3>
          <p>Drag, drop, and configure every field exactly how you want it.</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="palette" className="feature-icon">🎨</span>
          <h3>Vivid Themes</h3>
          <p>Choose beautiful color schemes that make your forms pop.</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="shield" className="feature-icon">🛡️</span>
          <h3>Secure & Private</h3>
          <p>Forms protected by secure login and privacy-focused design.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

