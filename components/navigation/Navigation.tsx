import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { proximaNova } from '../../utils/fonts';

export const PAGES = [
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
    <nav className='space-x-12'>
      {PAGES.map(({ href, title }) => (
        <Link
          className={clsx(
            `${proximaNova.variable} font-proxima-nova tracking-wide text-purple-400 pb-2 font-semibold`,
            {
              'border-b-2 border-purple-400 font-extrabold':
                router.pathname === href,
            }
          )}
          href={href}
          key={href}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
