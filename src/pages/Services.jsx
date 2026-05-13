import React from 'react';
import '../App.css';
import bgImage from '../assets/service-bg.png';

// Reusable Card Component
const ServiceCard = ({ pkg }) => (
  <div className={`service-card ${pkg.isPopular ? 'popular' : ''}`}>
    {/* Particle Effect Layer */}
    {pkg.particles.length > 0 && (
      <div className="particle-container">
        {pkg.particles.map((particle, pIdx) => (
          <div
            key={pIdx}
            className={`particle ${pkg.particleClass}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * -50}px`,
              animationDelay: `${pIdx * 0.4}s`
            }}
          >
            {particle}
          </div>
        ))}
      </div>
    )}

    {/* Badge positioned at the very top of the card */}
    {pkg.isPopular && (
      <div className="pricing-badge">
        <span className="badge-icon">✨</span>
        MOST POPULAR
        <span className="badge-icon">✨</span>
      </div>
    )}

    <div className="card-content">
      <div className="pricing-header">
        <div className="service-badge-pill" style={{ marginBottom: '1rem', display: pkg.badge ? 'inline-block' : 'none' }}>
          {pkg.badge}
        </div>
        <h1 className="package-title">{pkg.title}</h1>
        <h3 className="starts-at">Starts at</h3>
        <div className="pricing-amount">
          <span className="price-tag">{pkg.price}</span>
        </div>
        <p className="price-period">{pkg.duration}</p>
        <p className="package-desc">{pkg.desc}</p>
      </div>

      <div className="features-list">
        {pkg.features.map((feature, idx) => (
          <div key={idx} className="feature-item">
            <span className="feature-checkmark">✓</span>
            <span className="feature-text">{feature}</span>
          </div>
        ))}
      </div>

      <button className="service-select-btn">
        <a href="https://www.google.com" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          Inquire Now
        </a>
      </button>
    </div>
  </div>
);

const Services = () => {
  const coffeePackages = [
    {
      title: "Package 1",
      price: "₱7,000",
      duration: "3-4 hours",
      desc: "Perfect for personal coffee events and small gatherings.",
      features: ["50-75 cups", "Basic set-up", "Simple Decoration", "Minimal Customization", "2 skilled barista"],
      isPopular: false,
      particles: ['☕', '🧊', '☕', '🧊', '☕', '🧊'],
      particleClass: 'coffee-bean'
    },
    {
      title: "Package 2",
      price: "₱12,000",
      duration: "3-4 hours",
      desc: "Perfect for personal coffee events and small gatherings.",
      features: ["100-150 cups", "3 Types of Signature Drinks", "Customized Cups", "Theme Customization", "2 Skilled Barista"],
      isPopular: true,
      particles: ['☕', '🧊', '☕', '🧊', '☕', '🧊'],
      particleClass: 'coffee-bean'
    },
    {
      title: "Package 3",
      price: "₱22,000",
      duration: "3-4 hours",
      desc: "Perfect for personal coffee events and small gatherings.",
      features: ["200-300 cups", "3 Types of Signature Drinks", "Customized Cups", "Premium Beans/Syrup", "Higher-End Decoration", "Theme Customization", "2 skilled baristas"],
      isPopular: false,
      particles: ['☕', '🧊', '☕', '🧊', '☕', '🧊'],
      particleClass: 'coffee-bean'
    }
  ];

  const nachosPackages = [
    {
      title: "Package 1",
      price: "₱8,000",
      duration: "3-4 hours",
      desc: "Perfect for personal events and small gatherings.",
      features: ["100 Pax", "Pork & Beef (Seasoned)", "Salsa", "Cheese Sauce", "2 Staffs"],
      isPopular: false,
      particles: ['🌮', '🧀', '🌮', '🧀', '🌮', '🧀'],
      particleClass: 'nacho'
    },
    {
      title: "Package 2",
      price: "₱13,000",
      duration: "3-4 hours",
      desc: "Perfect for personal events and small gatherings.",
      features: ["150-200 Pax", "Pork & Beef (Seasoned)", "Salsa", "Cheese Sauce", "3 Staffs", "Flavored Juice", "Customized Theme"],
      isPopular: true,
      particles: ['🌮', '🧀', '🌮', '🧀', '🌮', '🧀'],
      particleClass: 'nacho'
    }
  ];

  const closedDoorPackages = [
    {
      title: "Closed Door Event",
      price: "₱35,000",
      duration: "Full Event",
      desc: "Exclusive private access with a curated artisan atmosphere.",
      features: ["Ideal for meetings, Intimate Gatherings", "Choice of Meal Selection", "Exclusive Use of the Space", "Wi-Fi Access"],
      isPopular: false,
      particles: ['🎉', '🎊', '🎉', '🎊', '🎉', '🎊'],
      particleClass: 'note'
    }
  ];

  return (
    <div className="services-page "style={{ 
        backgroundImage: `linear-gradient(rgba(26, 15, 10, 0.8), rgba(26, 15, 10, 0.8)), url(${bgImage})` 
      }}>
      <div className="services-header">
        <h2 className="about-title">Our Services</h2>
        <p className="about-subtitle">Tailored luxury for your special moments.</p>
      </div>

      <section className="service-section">
        <h3 className="section-subtitle">Coffee Booth</h3>
        <div className="services-grid">
          {coffeePackages.map((pkg, i) => <ServiceCard key={i} pkg={pkg} />)}
        </div>
        <div className="divider-line"></div>
      </section>

      <section className="service-section">
        <h3 className="section-subtitle">Nacho Bar</h3>
        <div className="services-grid">
          {nachosPackages.map((pkg, i) => <ServiceCard key={i} pkg={pkg} />)}
        </div>
        <div className="divider-line"></div>
      </section>

      <section className="service-section">
        <h3 className="section-subtitle">Closed-Door Event</h3>
        <div className="services-grid">
          {closedDoorPackages.map((pkg, i) => <ServiceCard key={i} pkg={pkg} />)}
        </div>
      </section>
    </div>
  );
};

export default Services;