import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

const RESOURCES = [
  {
    href: 'https://mailchi.mp/a35325185ff2/ebook-todo-sobre-sahumo',
    id: 1,
    text: 'Ebook Todo Sobre Sahumo',
  },
  {
    href: 'https://ladiesbrunch.co/nota/conecta-con-la-gratitud',
    id: 2,
    text: 'Guía emprendé con la mejor energía',
  },
  {
    href: 'https://ladiesbrunch.co/nota/conecta-con-la-gratitud',
    id: 3,
    text: 'Guía Reiki al Planeta',
  },
];

const ACTIVE_BUTTON_CSS = 'bg-purple-400 text-white';
const INACTIVE_BUTTON_CSS = 'bg-transparent text-purple-400';

export default function DownloadsPage() {
  // mapear click de botones con el slide y detener el carrousel
  // mapear flechas izquierda y derecha para pasar de slide
  const [activeResource, setActiveResource] = useState<number>(RESOURCES[0].id);

  const handleClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      if (!(event.target instanceof HTMLButtonElement)) {
        return;
      }
      setActiveResource(Number(event.target.dataset['id']));
    },
    [setActiveResource]
  );

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
          {RESOURCES.map(({ id, text }) => (
            <button
              className={clsx(
                'border-2 border-purple-400 px-8 py-2 rounded-full',
                `${activeResource === id ? ACTIVE_BUTTON_CSS : INACTIVE_BUTTON_CSS}`
              )}
              data-id={id}
              key={text}
              onClick={handleClick}
            >
              {text}
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
