import Image from 'next/image';
import React from 'react';
import { crimsonPro, playfairDisplay, proximaNova } from '../../utils/fonts';

export default function ServicesPage() {
  return (
    <section>
      <div className="bg-skin-200 w-full flex items-center justify-center bg-opacity-40" id="hero">
        <div className="py-60 text-center w-1/2 z-10">
          <p
            className={`${proximaNova.variable} font-proxima-nova font-semibold text-gold-600 mb-4 tracking-[0.15em]`}
          >
            PRESENCIALES Y A DISTANCIA
          </p>
          <h1
            className={`${playfairDisplay.variable} font-playfair-display text-gold-600 text-7xl`}
          >
            Sesiones de Reiki con Cristales
          </h1>
          <p
            className={`${crimsonPro.variable} font-crimson-pro w-1/2 mx-auto mt-6 text-gray-800 opacity-80`}
          >
            El Reiki es una herramienta de sanación y relajación maravillosa. Te brinda paz mental y
            aporta calma entre otros muchos beneficios.
          </p>
        </div>
        <div className="absolute left-32 z-0">
          <Image alt="sesion de reiki" height={450} src="/sesion-reiki-cover.png" width={300} />
        </div>
      </div>
    </section>
  );
}
