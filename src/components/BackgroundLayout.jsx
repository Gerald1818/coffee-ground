import React from 'react';

const BackgroundLayout = ({ backgroundImage, children }) => {
  const backgroundStyle = {
    backgroundImage: backgroundImage 
      ? `linear-gradient(rgba(26, 15, 10, 0.85), rgba(26, 15, 10, 0.85)), url(${backgroundImage})` 
      : 'linear-gradient(rgba(26, 15, 10, 0.85), rgba(26, 15, 10, 0.85))',
    backgroundAttachment: 'fixed', // Parallax effect on desktop
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div style={backgroundStyle} className="background-layout">
      {children}
    </div>
  );
};

export default BackgroundLayout;