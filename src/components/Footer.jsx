import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';
// Import your custom image icons from the assets folder
import fbIcon from '../assets/fb.png';
import igIcon from '../assets/ig.png';
import grabIcon from '../assets/grab.png';
import tiktokIcon from '../assets/tiktok.webp';
import threadsIcon from '../assets/threads.png';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "coffeegroundcabuyao@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Column 1: Brand/Identity */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">Coffee Ground</h2>
          <hr className="footer-divider" />
          <p className="footer-subtitle">Cabuyao Branch</p>
        </div>
        
        {/* Column 2: Site Map (Text-only list) */}
        <div className="footer-col sitemap-col">
          <h3>SITE MAP</h3>
          <ul>
            <li>About</li>
            <li>Products</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
        
        {/* Column 3: Actions & Contacts */}
        <div className="footer-col actions-col">
          {/* Email Box Action */}
          <div 
            onClick={handleCopyEmail} 
            title="Click to copy email"
            className="footer-email-box"
          >
            <span className="email-text">{emailAddress}</span>
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
              className="copy-icon"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            {copied && <span className="copied-toast">(Copied!)</span>}
          </div>

          {/* Phone Information */}
          <p className="footer-phone">
            <Smartphone size={16} /> 
            <a href="tel:09562188268">0956-218-8268</a>
          </p>
          
          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://r.grab.com/g/6-20260516_194337_0ab2212a6d0e4bf3b55a6278dd59f166_MEXMPS-2-C73EHAJ2JJEUL2" target="_blank" rel="noreferrer">
              <img src={grabIcon} alt="Grab" className="footer-icon" />
            </a>
            <a href="https://www.facebook.com/CABLOCALCAFFEINEDEALER" target="_blank" rel="noreferrer">
              <img src={fbIcon} alt="Facebook" className="footer-icon" />
            </a>
            <a href="https://www.instagram.com/coffeegroundcabuyao?igsh=MTVubW1wYjJvaHp1Mg==" target="_blank" rel="noreferrer">
              <img src={igIcon} alt="Instagram" className="footer-icon" />
            </a>
            <a href="https://www.tiktok.com/@coffeeground2023" target="_blank" rel="noreferrer">
              <img src={tiktokIcon} alt="TikTok" className="footer-icon tiktok-fix" />
            </a>
            <a href="https://www.threads.com/@coffeegroundcabuyao" target="_blank" rel="noreferrer">
              <img src={threadsIcon} alt="Threads" className="footer-icon" />
            </a>
          </div>
        </div>

      </div>

      {/* Global Bottom Copyright Row */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright © 2023 Coffee Ground Cabuyao. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;