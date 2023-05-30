import Image from 'next/image';
import React from 'react';
import { SectionContainer } from 'components/section/SectionContainer';
import { playfairDisplay } from 'utils/fonts';

export default function SessionPreparationSection() {
  return (
    <SectionContainer
      backgroundClassNames="bg-skin-200 bg-opacity-40"
      className="px-32 2xl:px-0 pt-20"
    >
      <h2
        className={`${playfairDisplay.variable} font-playfair-display text-gold-600 text-6xl leading-[106.8%] w-96`}
      >
        Al reservar tu sesión
      </h2>
      <div className="flex justify-between">
        <p
          className={`${playfairDisplay.variable} inline-block font-playfair-display ml-20 w-[420px] mt-10 text-2xl leading-8 text-gray-800`}
        >
          Recibirás por Whatsapp música y un video con recomendaciones para
          preparar tu espacio para la sesión y que la puedas aprovechar al
          máximo.
        </p>
        <Image
          alt="consultorio"
          className="relative bottom-12"
          height={330}
          src="/consultorio.png"
          width={500}
        />
      </div>
    </SectionContainer>
  );
}
