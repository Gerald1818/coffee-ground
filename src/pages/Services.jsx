import React from 'react';
import '../App.css';
import bgImage from '../assets/service-bg.png';
import cbooth1 from '../assets/images/coffee/coffee-booth1.jpeg';
import cbooth2 from '../assets/images/coffee/coffee-booth2.jpeg';
import cbooth3 from '../assets/images/coffee/coffee-booth3.jpeg';
import cbooth4 from '../assets/images/coffee/coffee-booth4.jpeg';
import cbooth5 from '../assets/images/coffee/coffee-booth5.jpeg';
import cbooth6 from '../assets/images/coffee/coffee-booth6.jpeg';
import cbooth7 from '../assets/images/coffee/coffee-booth7.jpeg';
import cbooth8 from '../assets/images/coffee/coffee-booth8.jpeg';
import cbooth9 from '../assets/images/coffee/coffee-booth9.png';
import cbooth10 from '../assets/images/coffee/coffee-booth10.png';
import cbooth11 from '../assets/images/coffee/coffee-booth11.jpeg';
import cbooth12 from '../assets/images/coffee/coffee-booth12.jpeg';
import cbooth13 from '../assets/images/coffee/coffee-booth13.jpeg';
import cbooth14 from '../assets/images/coffee/coffee-booth14.jpeg';
import cbooth15 from '../assets/images/coffee/coffee-booth15.jpeg';
import cbooth16 from '../assets/images/coffee/coffee-booth16.jpeg';
import nacho1 from '../assets/images/nacho/nacho-bar1.jpeg';
import nacho2 from '../assets/images/nacho/nacho-bar2.jpeg';
import nacho3 from '../assets/images/nacho/nacho-bar3.jpeg';
import nacho4 from '../assets/images/nacho/nacho-bar4.jpeg';
import nacho5 from '../assets/images/nacho/nacho-bar5.jpeg';
import nacho6 from '../assets/images/nacho/nacho-bar6.jpeg';
import closedDoor1 from '../assets/images/close-door/closed-door1.jpeg';
import closedDoor2 from '../assets/images/close-door/closed-door2.jpeg';
import closedDoor3 from '../assets/images/close-door/closed-door3.jpeg';
import closedDoor4 from '../assets/images/close-door/closed-door4.jpeg';
import closedDoor5 from '../assets/images/close-door/closed-door5.jpeg';
import closedDoor6 from '../assets/images/close-door/closed-door6.jpeg';
import closedDoor7 from '../assets/images/close-door/closed-door7.jpeg';
import closedDoor8 from '../assets/images/close-door/closed-door8.jpeg';
import closedDoor9 from '../assets/images/close-door/closed-door9.jpeg';
import closedDoor10 from '../assets/images/close-door/closed-door10.jpeg';
import closedDoor11 from '../assets/images/close-door/closed-door11.jpeg';
import closedDoor12 from '../assets/images/close-door/closed-door12.jpeg';
import closedDoor13 from '../assets/images/close-door/closed-door13.jpeg';
import closedDoor14 from '../assets/images/close-door/closed-door14.jpeg';
import closedDoor15 from '../assets/images/close-door/closed-door15.jpeg';
import closedDoor16 from '../assets/images/close-door/closed-door16.jpg';
import closedDoor17 from '../assets/images/close-door/closed-door17.jpeg';
import closedDoor18 from '../assets/images/close-door/closed-door18.jpeg';
import closedDoor19 from '../assets/images/close-door/closed-door19.jpeg';


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
        <a href="https://forms.gle/M37WwbdQR7uymMtD9" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
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
      desc: "A refined coffee service tailored for small gatherings, offering a classic menu with a focus on quality and care.",
      features: ["50-75 cups", "Basic set-up", "Simple Decoration", "Minimal Customization", "2 skilled barista"],
      isPopular: false,
      particles: ['☕', '🧊', '☕', '🧊', '☕', '🧊'],
      particleClass: 'coffee-bean'
    },
    {
      title: "Package 2",
      price: "₱12,000",
      duration: "3-4 hours",
      desc: "A sophisticated selection that features a wider variety of drinks and custom details to create a more personal touch.",
      features: ["100-150 cups", "3 Types of Signature Drinks", "Customized Cups", "Theme Customization", "2 Skilled Barista"],
      isPopular: false,
      particles: ['☕', '🧊', '☕', '🧊', '☕', '🧊'],
      particleClass: 'coffee-bean'
    },
    {
      title: "Package 3",
      price: "₱22,000",
      duration: "3-4 hours",
      desc: "The complete luxury experience for large celebrations, providing the finest ingredients and a full range of grand services.",
      features: ["200-300 cups", "3 Types of Signature Drinks", "Customized Cups", "Premium Beans/Syrup", "Higher-End Decoration", "Theme Customization", "2 skilled baristas"],
      isPopular: true,
      particles: ['☕', '🧊', '☕', '🧊', '☕', '🧊'],
      particleClass: 'coffee-bean'
    }
  ];

  const nachosPackages = [
    {
      title: "Package 1",
      price: "₱8,000",
      duration: "3-4 hours",
      desc: "Tailored for smaller groups, offering a classic menu with a focus on quality and care.",
      features: ["100 Pax", "Pork & Beef (Seasoned)", "Salsa", "Cheese Sauce", "2 Staffs"],
      isPopular: false,
      particles: ['🌮', '🧀', '🌮', '🧀', '🌮', '🧀'],
      particleClass: 'nacho'
    },
    {
      title: "Package 2",
      price: "₱13,000",
      duration: "3-4 hours",
      desc: "A sophisticated selection for larger gatherings, featuring refreshing beverages and custom details for a unique touch.",
      features: ["150-200 Pax", "Pork & Beef (Seasoned)", "Salsa", "Cheese Sauce", "3 Staffs", "Flavored Juice", "Customized Theme"],
      isPopular: true,
      particles: ['🌮', '🧀', '🌮', '🧀', '🌮', '🧀'],
      particleClass: 'nacho'
    }
  ];

  const closedDoorPackages = [
    {
      title: "Closed-Door Event",
      price: "₱3,500",
      duration: "Full Event (Consumable)",
      desc: "An exclusive private experience that provides full use of the space, offering a quiet and professional setting for special gatherings and focused events.",
      features: ["Ideal for meetings & Intimate Gatherings", "Choice of Meal Selection", "Exclusive Use of the Space", "Wi-Fi Access"],
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
        <h2 className="about-title">OUR SERVICES</h2>
        <p className="about-subtitle">Tailored luxury for your special moments.</p>
      </div>

      <section className="service-section">
        <h3 className="section-subtitle">coffee booth</h3>
        <div className="services-grid">
          {coffeePackages.map((pkg, i) => <ServiceCard key={i} pkg={pkg} />)}
        </div>

          <section className="carousel-container">

            <div className="carousel-slider">
              <div className="carousel-track">
                
                <div className="slide"><img src={cbooth1} alt="coffee booth 1" /></div>
                <div className="slide"><img src={cbooth2} alt="coffee booth 2" /></div>
                <div className="slide"><img src={cbooth3} alt="coffee booth 3" /></div>
                <div className="slide"><img src={cbooth4} alt="coffee booth 4" /></div>
                <div className="slide"><img src={cbooth5} alt="coffee booth 5" /></div>
                <div className="slide"><img src={cbooth6} alt="coffee booth 6" /></div>
                <div className="slide"><img src={cbooth7} alt="coffee booth 7" /></div>
                <div className="slide"><img src={cbooth8} alt="coffee booth 8" /></div>
                <div className="slide"><img src={cbooth9} alt="coffee booth 9" /></div>
                <div className="slide"><img src={cbooth10} alt="coffee booth 10" /></div>
                <div className="slide"><img src={cbooth11} alt="coffee booth 11" /></div>
                <div className="slide"><img src={cbooth12} alt="coffee booth 12" /></div>
                <div className="slide"><img src={cbooth13} alt="coffee booth 13" /></div>
                <div className="slide"><img src={cbooth14} alt="coffee booth 14" /></div>
                <div className="slide"><img src={cbooth15} alt="coffee booth 15" /></div>
                <div className="slide"><img src={cbooth16} alt="coffee booth 16" /></div>

              </div>
            </div>
          </section>

        <section className="our-concept-section">
        <div className="concept-banner">
          <h2 className="concept-title">excluded</h2>
          
          <div className="concept-content">

            <ul className="concept-list">
              <li>Transportation fee outside service area</li>
              <li style={{ marginBottom: '20px' }}>Additional service hours beyond agreed schedule</li>
            </ul>
          </div>

          <h2 className="concept-title">add-ons</h2>
          <div className="concept-content">

            <ul className="concept-list">
              <li>Pastries & Snacks</li>
              <li>Overtime service extension</li>
              <li>Flavored Drinks</li>
              <li>Event content coverage</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="divider-line"></div>
      </section>

      <section className="service-section">
        <h3 className="section-subtitle">nacho bar</h3>
        <div className="services-grid">
          {nachosPackages.map((pkg, i) => <ServiceCard key={i} pkg={pkg} />)}
        </div>
        <section className="carousel-container">

            <div className="carousel-slider">
              <div className="carousel-track">
                
                <div className="slide"><img src={nacho1} alt="nacho bar 1" /></div>
                <div className="slide"><img src={nacho2} alt="nacho bar 2" /></div>
                <div className="slide"><img src={nacho3} alt="nacho bar 3" /></div>
                <div className="slide"><img src={nacho4} alt="nacho bar 4" /></div>
                <div className="slide"><img src={nacho5} alt="nacho bar 5" /></div>
                <div className="slide"><img src={nacho6} alt="nacho bar 6" /></div>
                <div className="slide"><img src={nacho1} alt="nacho bar 1" /></div>
                <div className="slide"><img src={nacho2} alt="nacho bar 2" /></div>
                <div className="slide"><img src={nacho3} alt="nacho bar 3" /></div>
                <div className="slide"><img src={nacho4} alt="nacho bar 4" /></div>
                <div className="slide"><img src={nacho5} alt="nacho bar 5" /></div>
                <div className="slide"><img src={nacho6} alt="nacho bar 6" /></div>

              </div>
            </div>
          </section>

        <section className="our-concept-section">
          <div className="concept-banner">
            <h2 className="concept-title">excluded</h2>
          
            <div className="concept-content">

              <ul className="concept-list">
                <li>Transportation fee outside service area</li>
                <li style={{ marginBottom: '20px' }}>Additional service hours beyond agreed schedule</li>
             </ul>
            </div>

           <h2 className="concept-title">add-ons</h2>
           <div className="concept-content">

             <ul className="concept-list">
                <li>Pastries & Snacks</li>
                <li>Overtime service extension</li>
                <li>Event content coverage</li>
             </ul>
           </div>
          </div>
        </section>
      <div className="divider-line"></div>
      </section>

      <section className="service-section">
        <h3 className="section-subtitle">closed-door event</h3>
        <div className="services-grid">
          {closedDoorPackages.map((pkg, i) => <ServiceCard key={i} pkg={pkg} />)}
        </div>

        <section className="carousel-container">

            <div className="carousel-slider">
              <div className="carousel-track">
                
                <div className="slide"><img src={closedDoor1} alt="coffee booth 1" /></div>
                <div className="slide"><img src={closedDoor2} alt="coffee booth 2" /></div>
                <div className="slide"><img src={closedDoor3} alt="coffee booth 3" /></div>
                <div className="slide"><img src={closedDoor4} alt="coffee booth 4" /></div>
                <div className="slide"><img src={closedDoor5} alt="coffee booth 5" /></div>
                <div className="slide"><img src={closedDoor6} alt="coffee booth 6" /></div>
                <div className="slide"><img src={closedDoor7} alt="coffee booth 7" /></div>
                <div className="slide"><img src={closedDoor8} alt="coffee booth 8" /></div>
                <div className="slide"><img src={closedDoor9} alt="coffee booth 9" /></div>
                <div className="slide"><img src={closedDoor10} alt="coffee booth 10" /></div>
                <div className="slide"><img src={closedDoor11} alt="coffee booth 11" /></div>
                <div className="slide"><img src={closedDoor12} alt="coffee booth 12" /></div>
                <div className="slide"><img src={closedDoor13} alt="coffee booth 13" /></div>
                <div className="slide"><img src={closedDoor14} alt="coffee booth 14" /></div>
                <div className="slide"><img src={closedDoor15} alt="coffee booth 15" /></div>
                <div className="slide"><img src={closedDoor16} alt="coffee booth 16" /></div>
                <div className="slide"><img src={closedDoor17} alt="coffee booth 17" /></div>
                <div className="slide"><img src={closedDoor18} alt="coffee booth 18" /></div>
                <div className="slide"><img src={closedDoor19} alt="coffee booth 19" /></div>

              </div>
            </div>
          </section>

        <section className="our-concept-section">
          <div className="concept-banner">
            <h2 className="concept-title">add-ons</h2>
          
            <div className="concept-content">

              <ul className="concept-list">
                <li>Grazing table</li>
                <li>Customized decor</li>
                <li>Dessert packages</li>
                <li style={{ marginBottom: '20px' }}>Photo Set-up</li>
             </ul>
            </div>

           <h2 className="concept-title">terms & condition</h2>
           <div className="concept-content">

             <ul className="concept-list">
                <li>Reservation required</li>
                <li>Excess orders beyond consumable amount will be charged separately</li>
                <li>Extension of stay subject to availability</li>
                <li>Outside food and drinks may require corkage fee</li>
             </ul>
           </div>
          </div>
        </section>
        <div className="divider-line"></div>
        
      </section>
    </div>
  );
};

export default Services;