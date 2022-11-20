import React from 'react';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header className="absolute flex justify-between px-20 py-12 max-w-7xl w-full mx-auto right-0 left-0">
      <div id="logo">LOGO</div>
      <Navigation />
    </header>
  );
};

export default Header;
