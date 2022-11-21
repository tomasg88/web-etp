import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { getDownloadQuery } from '../../lib/queries';
import { useDownloadsPage } from '../../hooks/useDownloadsPage';

const ACTIVE_BUTTON_CSS = 'bg-purple-400 text-white';
const INACTIVE_BUTTON_CSS = 'bg-transparent text-purple-400';

export async function getDownloads() {
  const results = await getDownloadQuery();
  return results;
}

export default function DownloadsPage() {
  const { activeResource, downloads, handleClick } = useDownloadsPage();
  return (
    <section className="bg-gray-100">
      <div id="hero" className="flex flex-col items-center pt-20">
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
                  `${activeResource === _id ? ACTIVE_BUTTON_CSS : INACTIVE_BUTTON_CSS}`
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

      <div>
        {/* barra de duración del slide */}
        {/* flechas anteriorn y siguiente */}
        {/* detalles del recurso */}
      </div>
    </section>
  );
}
