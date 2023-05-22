import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { Footer } from '../footer/Footer';
import Header from '../header/Header';

const ADMIN_ROUTE = '/admin';

export default function RootLayout({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const { pathname } = useRouter();
  const isCMSView = pathname.includes(ADMIN_ROUTE);

  if (isCMSView) return children;

  return (
    <>
      <Head>
        <title>Enciende Tu Poder</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="antialiased">
        <Header />
        {children}
      </main>

      <div className="bg-purple-400">
        <Footer />
      </div>
    </>
  );
}
