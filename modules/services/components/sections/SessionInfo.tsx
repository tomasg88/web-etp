import Image from 'next/image';
import React from 'react';
import { SectionContainer } from 'components/section/SectionContainer';
import { playfairDisplay } from 'utils/fonts';

export default function SessionInfoSection() {
  return (
    <SectionContainer className="flex justify-between px-32 2xl:px-0 py-28 pt-8">
      <div className="ml-32">
        <Image
          alt="figura estrellas"
          height={287}
          src="/estrellas1.png"
          width={165}
        />
      </div>
      <div className="w-[650px] mt-32">
        <h3
          className={`${playfairDisplay.variable} font-playfair-display text-gold-600 text-4xl leading-[60px] text-center`}
        >
          La sesión es 100% a distancia{' '}
          <span className="border-2 rounded-full border-gold-600 inline-block px-5 mx-2">
            sin videollamada
          </span>
          con cita previa y dura 1 hora aprox.
        </h3>
      </div>
    </SectionContainer>
  );
}
