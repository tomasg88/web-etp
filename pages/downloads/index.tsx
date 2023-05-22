import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { getDownloads } from '../../lib/queries';
import { FreeResource, useDownloadsPage } from '../../hooks/useDownloadsPage';
import { useNextSanityImage } from 'next-sanity-image';
import { getClient } from '../../lib/sanity.server';
import { crimsonPro, playfairDisplay, proximaNova } from '../../utils/fonts';
import { DownloadButton } from '../../components/buttons/DownloadButton';

const ACTIVE_BUTTON_CSS = 'bg-purple-400 text-white';
const INACTIVE_BUTTON_CSS = 'bg-transparent text-purple-400';

export default function DownloadsPage({
  downloads,
}: {
  downloads: FreeResource[];
}) {
  const { activeDownload, handleClick } = useDownloadsPage({ downloads });

  const imageProps = useNextSanityImage(getClient(), activeDownload.cover);

  return (
    <section>
      <div className='bg-gray-100 flex flex-col items-center pt-20' id='hero'>
        <div
          className='relative w-full h-full flex items-center justify-center mt-20'
          id='dibujo'
        >
          <h1
            className={`${playfairDisplay.variable} font-playfair-display absolute text-gold-600 z-10 text-[96px] font-playfair`}
          >
            Recursos gratuitos
          </h1>
          <span className='flex items-center justify-center bg-white h-[475px] w-[475px] rounded-full'>
            <Image
              alt='diamante brillante'
              className='relative bottom-6 right-4'
              height={304}
              src='/shiny-diamond.png'
              width={226}
            />
          </span>
        </div>
        <div className='space-x-4 my-16  ' id='buttons'>
          {downloads?.length &&
            downloads.map(({ _id, name }) => (
              <button
                className={clsx(
                  `${proximaNova.variable} font-proxima-nova border-2 border-purple-400 px-8 py-2 rounded-full`,
                  `${
                    activeDownload?._id === _id
                      ? ACTIVE_BUTTON_CSS
                      : INACTIVE_BUTTON_CSS
                  }`
                )}
                data-id={_id}
                key={_id}
                onClick={handleClick}
              >
                {name}
              </button>
            ))}
        </div>
      </div>

      {/* Carrousel */}
      <div className='bg-white px-28 py-32 flex justify-between mx-auto items-start text-gray-800 2xl:max-w-7xl w-full'>
        {/* barra de duración del slide */}
        {/* flechas anteriorn y siguiente */}
        {/* detalles del recurso */}
        {activeDownload && (
          <>
            <div className='w-[430px]'>
              <h2
                className={`${playfairDisplay.variable} font-playfair-display text-5xl text-gray-800`}
              >
                {activeDownload.name}
              </h2>
              <p
                className={`${crimsonPro.variable} font-crimson-pro text-base text-gray-800 opacity-80 text-justify mt-8`}
              >
                {activeDownload.description}
              </p>
              <div className='mt-16'>
                <DownloadButton text={activeDownload.ctaButton} />
              </div>
              <div className='mt-8'>
                <p
                  className={`${crimsonPro.variable} font-crimson-pro text-base opacity-40`}
                >
                  *Completá con tus datos y recibilo directamente en tu correo!
                </p>
              </div>
            </div>
            <div>
              <Image
                {...imageProps}
                alt={activeDownload.name || ' '}
                layout='responsive'
                sizes='(max-width: 320px) 100vw, 480px'
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const downloads = await getDownloads();
  return { props: { downloads } };
}
