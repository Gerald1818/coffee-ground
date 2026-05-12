import React from 'react';
import videoSource from '../assets/shop-bg.mp4';

const Dashboard = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-text">
        <h1>Your Daily Dose Of Coffee.</h1>
        <p className="hero-tagline">Crafted moments. Premium experiences.</p>
        <button className="hero-btn" onClick={() => window.location.href = '/services'}>
          Book Now
        </button>
        <button className="hero-btn2" onClick={() => window.location.href = '/about'}>
          About Us
        </button>
      </div>
    </div>
  );
};

export default Dashboard;