import React, { useState } from 'react';

// Import your custom image icons from the assets folder
import fbIcon from '../assets/fb.png';
import igIcon from '../assets/ig.png';
import grabIcon from '../assets/grab.png';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "coffeegroundcabuyao@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      
      // Reset the "Copied!" message after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <footer className="main-footer">
      {/* Clickable email container */}
      <p 
        onClick={handleCopyEmail} 
        style={{ 
          marginBottom: '15px', 
          cursor: 'pointer', 
          userSelect: 'none',
          display: 'inline-flex', // Align items nicely in a row
          alignItems: 'center',
          gap: '6px' // Small gap between text and icon
        }}
        title="Click to copy email"
        className="footer-email"
      >
        <span>{emailAddress}</span>
        
        {/* SVG Copy Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{ opacity: 0.7, verticalAlign: 'middle' }}
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>

        {/* Success message */}
        {copied && (
          <span style={{ color: '#C8873F', fontSize: '0.85em', marginLeft: '4px' }}>
            (Copied!)
          </span>
        )}
      </p>

      <p style={{ marginBottom: '15px' }}>©2023 Coffee Ground Cabuyao. All rights reserved.</p>
      
      <div className="social-links" style={{ display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
        <a href="https://r.grab.com/g/6-20260516_194337_0ab2212a6d0e4bf3b55a6278dd59f166_MEXMPS-2-C73EHAJ2JJEUL2" target="_blank" rel="noreferrer">
          <img src={grabIcon} alt="Grab" className="footer-icon" style={{ width: 24, height: 24 }} />
        </a>
        <a href="https://www.facebook.com/CABLOCALCAFFEINEDEALER" target="_blank" rel="noreferrer">
          <img src={fbIcon} alt="Facebook" className="footer-icon" style={{ width: 24, height: 24 }} />
        </a>
        <a href="https://www.instagram.com/coffeegroundcabuyao?igsh=MTVubW1wYjJvaHp1Mg==" target="_blank" rel="noreferrer">
          <img src={igIcon} alt="Instagram" className="footer-icon" style={{ width: 24, height: 24 }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;