import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Services from './pages/Services';
// ADD THIS LINE BELOW:
import Menu from './pages/Menu'; 

import './App.css';

function App() {
  return (
    <Router>
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