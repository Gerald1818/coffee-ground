import React from 'react';
import aboutBg from '../assets/about-bg.png';
import menuImage from '../assets/brand-header.png';

const About = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.6979224355373!2d121.1211554751705!3d14.270830885065191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d9bc2c409f37%3A0x94512c7c2e33ff53!2sCOFFEE%20GROUND%20Cabuyao!5e0!3m2!1sen!2sph!4v1778590775509!5m2!1sen!2sph";

  return (
    <div className="about-page" style={{ 
        backgroundImage: `linear-gradient(rgba(26, 15, 10, 0.9), rgba(26, 15, 10, 0.9)), url(${aboutBg})` 
      }}>
      <img 
        src={menuImage} 
        alt="Coffee Ground Menu" 
        className="about-header-asset" 
      />

      {/* WHO WE ARE SECTION */}
      <section className="who-we-are-section">
        <div className="who-we-are-container">
          <h2 className="section-title">Who We Are</h2>
          
          <div className="who-we-are-content">
            <p>
              Coffee Ground was founded in July 2023 in the humble town of Malvar, Batangas by Eric and Jacqueline Tormis—Italian residents who returned to the Philippines with a dream of bringing a taste of Italy to their roots. With a shared love for rich coffee culture and heartfelt hospitality, they envisioned a space where authentic Italian cuisine meets Filipino flavors in a warm, community-centered environment.
            </p>

            <p>
              Starting as a small coffee shop, Coffee Ground quickly distinguished itself through its fusion of traditions and innovation. At the heart of the menu is Kerry Ancheta, whose dedication and culinary expertise shaped a unique blend of Italian and Filipino dishes that reflect both heritage and creativity.
            </p>

            <p>
              Taking the reins as full operational barista trainer and customer experience is Angelo Oraa, a passionate coffee consultant who also leads the brand's marketing and strategic development.
            </p>
          </div>
        </div>
      </section>

      {/* OUR CONCEPT SECTION */}
      <section className="our-concept-section">
        <div className="concept-banner">
          <h2 className="concept-title">Our Concept</h2>
          
          <div className="concept-content">
            <p className="concept-intro">
              At Coffee Ground, we serve more than just coffee, we serve connection.
            </p>
            <p className="concept-highlight">Our offerings highlight:</p>

            <ul className="concept-list">
              <li>Authentic Italian Coffee and Espresso-Based Beverages</li>
              <li>Fusion Cuisine Inspired by Filipino and Italian Traditions</li>
              <li>Handcrafted Dishes Using Local, Sustainable Ingredients</li>
              <li>A Relaxed, Inclusive Café Experience Focused on Community</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission-card">
            <h3 className="mission-vision-title">MISSION</h3>
            <p className="mission-vision-text">
              To build a business that sustains livelihoods, uplifts communities, and fosters collaboration through food and coffee.
              Coffee Ground is a space where passion meets purpose, and where every cup supports a greater cause.
            </p>
          </div>
          <div className="vision-card">
            <h3 className="mission-vision-title">VISION</h3>
            <p className="mission-vision-text">
              To become a top cofee chain in the Philippines, driven by quality, culture, and community.
              Within the next 10 years, we aim to grow Coffee Ground into a premier franchise brand recognized for excellence, authenticity, and heart.
            </p>
          </div>
          
        </div>
        
      </section>
      {/* OUR Values */}
      <section className="our-concept-section">
        <div className="concept-banner">
          <h2 className="concept-title">Our values</h2>
          
          <div className="concept-content">

            <ul className="concept-list">
              <li>Authenticity - True to our roots, proud of our story</li>
              <li>Collaboration - Built through teamwork and shared passion</li>
              <li>Sustainability - Supporting local producers and responsible practices</li>
              <li>Community - Coffee Ground is your home away from home</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LOCATION MAP SECTION */}
      <section className="location-section">
        <div className="location-container">
          <div className="map-wrapper">
            <iframe
              src={mapEmbedUrl}
              className="google-map"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Ground Cabuyao Location - 74CF+8FQ, Cabuyao City, Laguna, Philippines"
            />
          </div>

          <div className="location-info">
            <p className="address-text">📍<a href="https://maps.app.goo.gl/Ud1MGwd7xxaYoQ7VA">Coffee Ground Cabuyao</a></p>
            <p className="address-subtext">74CF+8FQ, Cabuyao City, Laguna, Philippines</p>
            <p className="coordinates-text">Coordinates: 14.2750°N, 121.1180°E</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;