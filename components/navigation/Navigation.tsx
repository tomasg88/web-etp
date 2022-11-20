import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const PAGES = [
  {
    href: '/about',
    title: 'ABOUT',
  },
  {
    href: '/services',
    title: 'SERVICIOS',
  },
  {
    href: '/downloads',
    title: 'RECURSOS GRATUITOS',
  },
  {
    href: '/contact',
    title: 'CONTACTO',
  },
];

export default function Navigation() {
  const router = useRouter();
  return (
    <nav className="space-x-8">
      {PAGES.map(({ href, title }) => (
        <Link
          className={clsx('tracking-wide text-purple-400 pb-2 font-medium', {
            'border-b-2 border-purple-400': router.pathname === href,
          })}
          href={href}
          key={href}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
