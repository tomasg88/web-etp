import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { playfairDisplay, proximaNova } from '../../utils/fonts';
import { PAGES } from '../navigation/Navigation';
import EmailIcon from '../icons/social/EmailIcon';
import YoutubeIcon from '../icons/social/YoutubeIcon';
import SpotifyIcon from '../icons/social/SpotifyIcon';
import FacebookIcon from '../icons/social/FacebookIcon';
import InstagramIcon from '../icons/social/InstagramIcon';

const SOCIAL_LINKS = [
  {
    href: '',
    icon: <EmailIcon />,
  },
  {
    href: '',
    icon: <YoutubeIcon />,
  },
  {
    href: '',
    icon: <SpotifyIcon />,
  },
  {
    href: '',
    icon: <FacebookIcon />,
  },
  {
    href: '',
    icon: <InstagramIcon />,
  },
];

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-20 py-12 2xl:max-w-7xl w-full mx-auto right-0 left-0">
      <div className="flex items-center">
        <div>
          <Image alt="Enciende Tu Poder" height={10} src="/footer-logo.png" width={200} />
        </div>
        <div className="space-x-8 ml-12">
          {PAGES.map(({ href, title }) => (
            <Link
              className={`${proximaNova.variable} font-proxima-nova tracking-wide text-pink-400 pb-2 font-semibold`}
              href={href}
              key={href}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center text-right space-x-2">
        <p className={`${playfairDisplay.variable} mr-2 font-playfair-display text-pink-400`}>
          Nuestras redes:
        </p>
        {SOCIAL_LINKS.map(({ href, icon }, index) => (
          <Link href={href} key={index}>
            <span className="bg-pink-400 w-8 h-8 rounded-full flex justify-center items-center">
              {icon}
            </span>
          </Link>
        ))}
      </div>
    </footer>
  );
};
