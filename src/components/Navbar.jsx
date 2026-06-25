import React from 'react';
import { NavLink } from 'react-router-dom'; 
// Replaced Coffee with Store to match image_16bb3d.png
import { LayoutDashboard, Info, Store, BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <span className="logo">COFFEE GROUND</span>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-item" end>
          <LayoutDashboard className="nav-icon" size={18} />
          <span className="nav-text">Dashboard</span>
        </NavLink>
        
        <NavLink to="/about" className="nav-item">
          <Info className="nav-icon" size={18} />
          <span className="nav-text">About</span>
        </NavLink>
        
        <NavLink to="/menu" className="nav-item">
          <BookOpen className="nav-icon" size={18} />
          <span className="nav-text">Menu</span>
        </NavLink>
        
        <NavLink to="/services" className="nav-item">
          {/* Updated to use the Store icon */}
          <Store className="nav-icon" size={18} />
          <span className="nav-text">Services</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;