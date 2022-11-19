import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <nav>
      <Link href="/about">ABOUT</Link>
      <Link href="/services">SERVICIOS</Link>
      <Link href="/downloads">RECURSOS GRATUITO</Link>
      <Link href="/contact">CONTACTO</Link>
    </nav>
  );
}
