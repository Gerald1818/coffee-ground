import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Services from './pages/Services';
import Menu from './pages/Menu'; 

// Import your supabase client (make sure you created this file!)
import { supabase } from './supabaseClient'; 

import './App.css';

// ─── GLOBAL SCROLL TO TOP HELPER ─────────────────────────────────────
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' 
    });
  }, [pathname]); 

  return null;
};

// ─── MAIN APP COMPONENT ──────────────────────────────────────────────
function App() {
  
  // ─── SILENT VISITOR COUNTER ───
  useEffect(() => {
    // Check sessionStorage so refreshing doesn't spike your count artificially
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
      // Trigger the PostgreSQL RPC function we created in Supabase
      supabase.rpc('increment_visitor_count')
        .then(({ error }) => {
          if (!error) {
            // Drop a cookie/token in session storage so they aren't recounted until they close the tab
            sessionStorage.setItem('hasVisited', 'true');
          } else {
            console.error('Supabase RPC Error:', error);
          }
        })
        .catch(err => {
          // Fails completely silently in production so your users have a seamless experience
          console.error('Silent counter issue:', err);
        });
    }
  }, []); // Runs exactly once when the application boots up

  return (
    <Router>
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