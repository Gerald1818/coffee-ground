import React from 'react';

const Services = () => {
  const packages = [
    {
      title: "Coffee Package",
      price: "$1,999",
      duration: "3-4 hours",
      desc: "Perfect for personal coffee events and small gatherings with artisan setup.",
      features: [
        "Full barista service",
        "Signature coffee blends",
        "2 hours of setup",
        "Basic equipment",
        "5 guests included",
        "Coffee and pastries"
      ],
      isPopular: false,
      particles: ['☕', '🫘', '☕', '🫘', '☕', '🫘', '☕', '🫘'],
      particleClass: 'coffee-bean'
    },
    {
      title: "Nachos Package",
      price: "$1,999",
      duration: "3-4 hours",
      desc: "Perfect for personal coffee events and small gatherings with artisan setup.",
      features: [
        "Full barista service",
        "Signature coffee blends",
        "2 hours of setup",
        "Basic equipment",
        "5 guests included",
        "Coffee and pastries"
      ],
      isPopular: false,
      particles: ['🌮', '🧀', '🌮', '🧀', '🌮', '🧀', '🌮', '🧀'],
      particleClass: 'nacho'
    },
    {
      title: "Nachos Package",
      price: "$1,999",
      duration: "3-4 hours",
      desc: "Perfect for personal coffee events and small gatherings with artisan setup.",
      features: [
        "Full barista service",
        "Signature coffee blends",
        "2 hours of setup",
        "Basic equipment",
        "5 guests included",
        "Coffee and pastries"
      ],
      isPopular: false,
      particles: ['🎉', '🎊', '🎉', '🎊', '🎉', '🎊', '🎉', '🎊'],
      particleClass: 'note'
    }
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <h2 className="about-title">Service Packages</h2>
        <p className="about-subtitle">Tailored experiences for coffee enthusiasts and event seekers.</p>
      </div>

      <div className="services-grid">
        {packages.map((pkg, index) => (
          <div key={index} className={`service-card ${pkg.isPopular ? 'popular' : ''}`}>
            {/* Particle Container */}
            {pkg.particles.length > 0 && (
              <div className="particle-container">
                {pkg.particles.map((particle, pIdx) => (
                  <div 
                    key={pIdx} 
                    className={`particle ${pkg.particleClass}`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * -50}px`
                    }}
                  >
                    {particle}
                  </div>
                ))}
              </div>
            )}

            {/* Card Content */}
            <div className="card-content">
              {pkg.isPopular && <div className="pricing-badge">MOST POPULAR</div>}
              
              <div className="pricing-header">
                {/* Top badges */}
                <div style={{ 
                  display: 'flex', 
                  gap: '0.6rem', 
                  justifyContent: 'center', 
                  marginBottom: '1rem', 
                  flexWrap: 'wrap' 
                }}>
                  
                    {pkg.discount}
                  
                </div>

                {/* Title */}
                <h3>{pkg.title}</h3>

                {/* Pricing */}
                <div className="pricing-amount">
                  <span className="pricing-original">{pkg.originalPrice}</span>
                  <span className="price-tag">{pkg.price}</span>
                </div>
                <p className="price-period">{pkg.period}</p>

                {/* Description */}
                <p>{pkg.desc}</p>
              </div>

              {/* Features List */}
              <div style={{ 
                flex: 1, 
                textAlign: 'left', 
                marginBottom: '1.5rem' 
              }}>
                {pkg.features.map((feature, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.8rem',
                    margin: '0.75rem 0',
                    fontSize: '0.9rem',
                    color: 'var(--text-main)',
                    fontFamily: 'var(--font-body)',
                    fontStyle: 'italic',
                    fontWeight: '300'
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '18px',
                      height: '18px',
                      background: 'rgba(200, 135, 63, 0.20)',
                      border: '1px solid var(--caramel)',
                      borderRadius: '50%',
                      color: 'var(--caramel)',
                      fontSize: '0.75rem',
                      flexShrink: 0
                    }}>
                      ✓
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button - Always at bottom */}
              <button className="service-select-btn">Select Plan</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;