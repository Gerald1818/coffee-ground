import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">COFFEE GROUND</div>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
};

export default Navbar;