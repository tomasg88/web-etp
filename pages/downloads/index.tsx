import React, { useMemo } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { getDownloads } from '../../lib/queries';
import { FreeResource, useDownloadsPage } from '../../hooks/useDownloadsPage';

const ACTIVE_BUTTON_CSS = 'bg-purple-400 text-white';
const INACTIVE_BUTTON_CSS = 'bg-transparent text-purple-400';

export default function DownloadsPage({ downloads }: { downloads: FreeResource[] }) {
  const { activeDownload, handleClick } = useDownloadsPage({ downloads });

  return (
    <section>
      <div id="hero" className="bg-gray-100 flex flex-col items-center pt-20">
        <div id="dibujo" className="relative w-full h-full flex items-center justify-center mt-20">
          <h1 className="absolute text-gold-600 z-10 text-[96px] font-playfair">
            Recursos gratuitos
          </h1>
          <span className="flex items-center justify-center bg-white h-[475px] w-[475px] rounded-full">
            <Image
              className="relative bottom-6 right-4"
              src={'/shiny-diamond.png'}
              alt={'diamante brillante'}
              width={226}
              height={304}
            />
          </span>
        </div>
        <div id="buttons" className="space-x-4 my-16  ">
          {downloads?.length &&
            downloads.map(({ _id, name }) => (
              <button
                className={clsx(
                  'border-2 border-purple-400 px-8 py-2 rounded-full',
                  `${activeDownload?._id === _id ? ACTIVE_BUTTON_CSS : INACTIVE_BUTTON_CSS}`
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
      <div className="bg-white px-28 py-32 flex justify-between mx-auto items-start text-gray-800 2xl:max-w-7xl w-full">
        {/* barra de duración del slide */}
        {/* flechas anteriorn y siguiente */}
        {/* detalles del recurso */}
        {activeDownload && (
          <>
            <div className="w-[430px]">
              <h2 className="font-playfair text-5xl w-96 text-gray-800">{activeDownload.name}</h2>
              <p className="text-base text-gray-800 opacity-80 text-justify mt-8">
                {activeDownload.description}
              </p>
              <button className="mt-16 bg-gold-400 rounded-lg text-white py-3 px-6">{`${activeDownload.ctaButton} >`}</button>
            </div>
            <div>imagen</div>
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
