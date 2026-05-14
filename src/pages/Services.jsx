import React from 'react';
import ServiceCard from '../components/ServiceCard';
import ConceptSection from '../components/ConceptSection';
import BackgroundLayout from '../components/BackgroundLayout';
import bgImage from '../assets/service-bg.png';

const Services = () => {
  // ── Coffee Packages Data ──
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

  // ── Nacho Packages Data ──
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

  // ── Closed Door Packages Data ──
  const closedDoorPackages = [
    {
      title: "Closed Door Event",
      price: "₱3,500",
      duration: "Full Event (Consumable)",
      desc: "An exclusive private experience that provides full use of the space, offering a quiet and professional setting for special gatherings and focused events.",
      features: ["Ideal for meetings & Intimate Gatherings", "Choice of Meal Selection", "Exclusive Use of the Space", "Wi-Fi Access"],
      isPopular: false,
      particles: ['🎉', '🎊', '🎉', '🎊', '🎉', '🎊'],
      particleClass: 'note'
    }
  ];

  // ── Concept Sections Data (Reusable for all categories) ──
  const coffeeConceptSections = [
    {
      title: "Excluded",
      items: ["Transportation fee outside service area", "Additional service hours beyond agreed schedule"],
      bottomMargin: true
    },
    {
      title: "Add-Ons",
      items: ["Pastries & Snacks", "Overtime service extension", "Flavored Drinks", "Event content coverage"]
    }
  ];

  const nachosConceptSections = [
    {
      title: "Excluded",
      items: ["Transportation fee outside service area", "Additional service hours beyond agreed schedule"],
      bottomMargin: true
    },
    {
      title: "Add-Ons",
      items: ["Pastries & Snacks", "Overtime service extension", "Event content coverage"]
    }
  ];

  const closedDoorConceptSections = [
    {
      title: "Add-Ons",
      items: ["Grazing table", "Customized decor", "Dessert packages", "Photo Set-up"],
      bottomMargin: true
    },
    {
      title: "Terms & Condition",
      items: [
        "Reservation required",
        "Excess orders beyond consumable amount will be charged separately",
        "Extension of stay subject to availability",
        "Outside food and drinks may require corkage fee"
      ]
    }
  ];

  // ── Service Section Component (DRY principle) ──
  const ServiceSection = ({ title, packages, conceptSections }) => (
    <section className="service-section">
      <h3 className="section-subtitle">{title}</h3>
      <div className="services-grid">
        {packages.map((pkg, i) => (
          <ServiceCard key={i} pkg={pkg} />
        ))}
      </div>
      <ConceptSection sections={conceptSections} />
      <div className="divider-line"></div>
    </section>
  );

  return (
    <BackgroundLayout backgroundImage={bgImage}>
      <div className="services-page">
        {/* Header */}
        <div className="services-header">
          <h2 className="about-title">Our Services</h2>
          <p className="about-subtitle">Tailored luxury for your special moments.</p>
        </div>

        {/* Coffee Booth Section */}
        <ServiceSection
          title="Coffee Booth"
          packages={coffeePackages}
          conceptSections={coffeeConceptSections}
        />

        {/* Nacho Bar Section */}
        <ServiceSection
          title="Nacho Bar"
          packages={nachosPackages}
          conceptSections={nachosConceptSections}
        />

        {/* Closed-Door Event Section */}
        <ServiceSection
          title="Closed-Door Event"
          packages={closedDoorPackages}
          conceptSections={closedDoorConceptSections}
        />
      </div>
    </BackgroundLayout>
  );
};

export default Services;