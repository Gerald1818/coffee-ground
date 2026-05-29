import React, { useState } from 'react';
import { Smartphone, MapPin } from 'lucide-react';

// Import custom image icons
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
        
        {/* Left Column: Email & Address */}
        <div className="footer-left-col">
          <p
            onClick={handleCopyEmail}
            title="Click to copy email"
            className="footer-email"
            style={{ cursor: 'pointer', userSelect: 'none', marginBottom: '4px' }}
          >
            <span>{emailAddress}</span>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ opacity: 0.6 }}
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>

            {copied && (
              <span style={{ color: '#C8873F', fontSize: '0.85em', marginLeft: '4px', fontStyle: 'normal' }}>
                (Copied!)
              </span>
            )}
          </p>

          <p className="footer-address">
            <MapPin size={14} style={{ opacity: 0.6, flexShrink: 0 }} />
            <a href="https://maps.app.goo.gl/Ud1MGwd7xxaYoQ7VA" target="_blank" rel="noreferrer">
              74CF+8FQ, Cabuyao City, Laguna, Philippines
            </a>
          </p>
        </div>
        
        {/* Right Column: Social Links & Phone */}
        <div className="footer-right-col">
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
              <img src={tiktokIcon} alt="TikTok" className="footer-icon" />
            </a>
            <a href="https://www.threads.com/@coffeegroundcabuyao" target="_blank" rel="noreferrer">
              <img src={threadsIcon} alt="Threads" className="footer-icon" />
            </a>
          </div>
          
          <p className="footer-phone">
            <Smartphone size={14} style={{ opacity: 0.7 }} />
            <a href="tel:09562188268">0956-218-8268</a>
          </p>
        </div>

        {/* Center Bottom Row: Copyright Block */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            ©2023 Coffee Ground Cabuyao. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;