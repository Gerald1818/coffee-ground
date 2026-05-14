import React from 'react';

const ServiceCard = ({ pkg }) => (
  <div className={`service-card ${pkg.isPopular ? 'popular' : ''}`}>
    {/* Particle Effect Layer - Background animations */}
    {pkg.particles && pkg.particles.length > 0 && (
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

    {/* Popular Badge - Positioned at top of card */}
    {pkg.isPopular && (
      <div className="pricing-badge">
        <span className="badge-icon">✨</span>
        MOST POPULAR
        <span className="badge-icon">✨</span>
      </div>
    )}

    {/* Card Content - Main container with pricing and features */}
    <div className="card-content">
      <div className="pricing-header">
        {/* Custom Badge - Optional small badge below title */}
        {pkg.badge && (
          <div className="service-badge-pill">
            {pkg.badge}
          </div>
        )}

        {/* Package Title */}
        <h1 className="package-title">{pkg.title}</h1>

        {/* "Starts at" Label */}
        <h3 className="starts-at">Starts at</h3>

        {/* Price Display */}
        <div className="pricing-amount">
          <span className="price-tag">{pkg.price}</span>
        </div>

        {/* Duration */}
        <p className="price-period">{pkg.duration}</p>

        {/* Package Description */}
        <p className="package-desc">{pkg.desc}</p>
      </div>

      {/* Features List */}
      <div className="features-list">
        {pkg.features && pkg.features.map((feature, idx) => (
          <div key={idx} className="feature-item">
            <span className="feature-checkmark">✓</span>
            <span className="feature-text">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA Button - Always at bottom */}
      <button className="service-select-btn">
        <a 
          href="https://forms.gle/M37WwbdQR7uymMtD9" 
          style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Inquire Now
        </a>
      </button>
    </div>
  </div>
);

export default ServiceCard;