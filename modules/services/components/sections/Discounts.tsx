import React from 'react';
import { SectionContainer } from '../../../../components/section/SectionContainer';
import { crimsonPro, playfairDisplay } from '../../../../utils/fonts';

export default function DiscountsSection() {
  return (
    <SectionContainer
      className="py-24 text-center"
      style={{
        backgroundImage: 'url(./estrellas.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 100,
        backgroundPositionY: 50,
      }}
    >
      <div
        className={`${playfairDisplay.variable} font-playfair-display flex items-center justify-evenly w-[700px] mx-auto h-[500px]`}
        style={{
          backgroundImage: 'url(./vector-13.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <p className="uppercase text-purple-400 text-3xl leading-8">
          Pack de <span className="text-gold-500 text-4xl">3</span> sesiones
        </p>
        <p className="text-gold-500 text-[280px] px-16 inline-block pb-28">
          15
        </p>
        <p className="uppercase text-purple-400 text-3xl leading-8 text-left">
          de descuento
        </p>
      </div>
      <p
        className={`${crimsonPro.variable} font-crimson-pro opacity-40 leading-6`}
      >
        *Son transferibles y tenés 2 meses para usarlas.
      </p>
    </SectionContainer>
  );
}
