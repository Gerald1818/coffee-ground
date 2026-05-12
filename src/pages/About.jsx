import React from 'react';

const About = () => {
  // Coffee Ground Cabuyao Location
  // Plus Code: 74CF+8FQ
  // Coordinates: 14.2729°N, 121.1247°E
  // Cabuyao City, Laguna, Philippines
  
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.6979224355373!2d121.12115547517055!3d14.270830885065191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d9bc2c409f37%3A0x94512c7c2e33ff53!2sCOFFEE%20GROUND%20Cabuyao!5e0!3m2!1sen!2sph!4v1778563617011!5m2!1sen!2sph"

  return (
    <div className="services-page">
      <div className="about-container">
        <h2 className="about-title">OUR STORY</h2>
        <p className="about-subtitle">A sanctuary for coffee purists and dreamers in the heart of Laguna.</p>

        <div className="about-cards">
          <div className="service-card">
            <h4>MISSION</h4>
            <p>To brew community connections through artisan craft and genuine hospitality.</p>
          </div>
          <div className="service-card">
            <h4>VISION</h4>
            <p>To be Cabuyao's favorite caffeine dealer and the most welcoming safe space.</p>
          </div>
        </div>

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
          <p className="address-text">📍 Coffee Ground Cabuyao</p>
          <p className="address-subtext">74CF+8FQ, Cabuyao City, Laguna, Philippines</p>
          <p className="coordinates-text">Coordinates: 14.2729°N, 121.1247°E</p>
        </div>
      </div>
    </div>
  );
};

export default About;