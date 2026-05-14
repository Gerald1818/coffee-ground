import React from 'react';

/**
 * BackgroundLayout Component
 * Reusable wrapper for pages with background images
 * Handles responsive background image display for mobile, tablet, and desktop
 * 
 * Usage:
 * <BackgroundLayout backgroundImage={bgImage}>
 *   <YourContent />
 * </BackgroundLayout>
 */
const BackgroundLayout = ({ backgroundImage, children }) => {
  const backgroundStyle = {
    backgroundImage: backgroundImage 
      ? `linear-gradient(rgba(26, 15, 10, 0.85), rgba(26, 15, 10, 0.85)), url(${backgroundImage})` 
      : 'linear-gradient(rgba(26, 15, 10, 0.85), rgba(26, 15, 10, 0.85))',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
  };

  return (
    <div style={backgroundStyle} className="background-layout">
      {children}
    </div>
  );
};

export default BackgroundLayout;