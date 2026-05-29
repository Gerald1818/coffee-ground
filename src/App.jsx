import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Services from './pages/Services';
import Menu from './pages/Menu'; 

import './App.css';

// ─── GLOBAL SCROLL TO TOP HELPER ─────────────────────────────────────
// This component listens to route path changes and forces a top reset.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Resets layout position instantly without smooth transitions
    });
  }, [pathname]); // Fires every single time the URL pathname string shifts

  return null;
};

function App() {
  return (
    <Router>
      {/* ScrollToTop must sit inside Router to successfully read useLocation context */}
      <ScrollToTop /> 
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;