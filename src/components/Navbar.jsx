import React from 'react';
import { Link } from 'react-router-dom';
// Import icons (Install using: npm install lucide-react)
import { LayoutDashboard, Info, Coffee } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">COFFEE GROUND</div>
      <div className="nav-links">
        <Link to="/" className="nav-item">
          <LayoutDashboard className="nav-icon" size={20} />
          <span className="nav-text">Dashboard</span>
        </Link>
        <Link to="/about" className="nav-item">
          <Info className="nav-icon" size={20} />
          <span className="nav-text">About</span>
        </Link>
        <Link to="/services" className="nav-item">
          <Coffee className="nav-icon" size={20} />
          <span className="nav-text">Services</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;