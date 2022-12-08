import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { proximaNova } from '../../utils/fonts';
import { PAGES } from '../navigation/Navigation';
import EmailIcon from '../icons/social/EmailIcon';
import YoutubeIcon from '../icons/social/YoutubeIcon';
import SpotifyIcon from '../icons/social/SpotifyIcon';
import FacebookIcon from '../icons/social/FacebookIcon';
import InstagramIcon from '../icons/social/InstagramIcon';

export const Footer = () => {
  return (
    <footer className="bg-purple-400 flex justify-between px-20 py-12 2xl:max-w-7xl w-full mx-auto right-0 left-0">
      <div className="flex items-center">
        {/* LOGO */}
        <div>
          <Image alt="Enciende Tu Poder" height={100} src="/footer-logo.png" width={200} />
        </div>

        {/* Site Map */}
        <div className="space-x-8 flex ml-12 items-center">
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
        <Link href="">
          <span className="bg-pink-400 w-8 h-8 rounded-full flex justify-center items-center">
            <EmailIcon />
          </span>
        </Link>
        <Link href="">
          <span className="bg-pink-400 w-8 h-8 rounded-full flex justify-center items-center">
            <YoutubeIcon />
          </span>
        </Link>
        <Link href="">
          <span className="bg-pink-400 w-8 h-8 rounded-full flex justify-center items-center">
            <SpotifyIcon />
          </span>
        </Link>
        <Link href="">
          <span className="bg-pink-400 w-8 h-8 rounded-full flex justify-center items-center">
            <FacebookIcon />
          </span>
        </Link>
        <Link href="">
          <span className="bg-pink-400 w-8 h-8 rounded-full flex justify-center items-center">
            <InstagramIcon />
          </span>
        </Link>
      </div>
    </footer>
  );
};
