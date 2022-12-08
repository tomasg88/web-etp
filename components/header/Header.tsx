import Image from 'next/image';
import React from 'react';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header className="absolute flex justify-between items-center px-20 h-28 2xl:max-w-7xl w-full mx-auto right-0 left-0">
      <div className="block h-20 w-56">
        <Image
          alt="Enciende Tu Poder"
          height={80}
          src="/Enciende-Logo-Horizontal.png"
          width={230}
        />
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
