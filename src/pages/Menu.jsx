import React from 'react';
import menuImage from '../assets/menu-img.jpg';
import aboutBg from '../assets/about-bg.png';
import '../App.css';

const Menu = () => {
  return (
    <div
      className="menu-page-container"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 15, 10, 0.9), rgba(26, 15, 10, 0.9)), url(${aboutBg})`,
      }}
    >
      <div className="menu-glass-card">
        <h1 className="menu-main-title">Our Menu</h1>
        <div className="title-underline"></div>
        
        <div className="menu-image-frame">
          <div className="menu-image-scroll-box">
            <img 
              src={menuImage} 
              alt="Coffee Ground Menu" 
              className="menu-img-asset" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;