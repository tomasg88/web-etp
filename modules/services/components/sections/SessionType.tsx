import Image from 'next/image';
import React from 'react';
import { SectionContainer } from 'components/section/SectionContainer';
import { playfairDisplay } from 'utils/fonts';

export default function SessionTypeSection() {
  return (
    <SectionContainer className="flex justify-between items-center px-32 py-28">
      <div className="w-1/2 space-y-16">
        <h2
          className={`${playfairDisplay.variable} font-playfair-display text-gold-600 text-6xl leading-[106.8%]`}
        >
          Sesión de Reiki a Distancia
        </h2>
        <p
          className={`${playfairDisplay.variable} font-playfair-display text-gray-800 text-2xl px-32 leading-[129.3%]`}
        >
          Es la mejor opción para tomar una sesión desde la comodidad de tu
          casa, estés donde estés.
        </p>
      </div>
      <div>
        <Image
          alt="sesión de reiki con péndulo"
          height={499}
          src="/sesion-pendulo.png"
          width={376}
        />
      </div>
    </SectionContainer>
  );
}
