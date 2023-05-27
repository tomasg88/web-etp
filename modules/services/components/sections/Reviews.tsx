import Image from 'next/image';
import React from 'react';
import { SectionContainer } from '../../../../components/section/SectionContainer';
import { playfairDisplay, proximaNova } from '../../../../utils/fonts';

const IS_OPINION_ACTIVE = true;
const TEXT_OPINION =
  '“Llegué a cande por recomendación de una amiga. La contacté para que nos acompañara con sesiones de reiki a distancia para mi suegro que estaba en terapia intensiva por un cuadro de covid grave...';

export default function ReviewsSection() {
  return (
    <SectionContainer
      className={`${playfairDisplay.variable} font-playfair-display py-20 px-32 mx-auto flex flex-col text-purple-400`}
    >
      <div className="flex items-center justify-center mb-12">
        <Image alt="estrella" height={30} src="/estrella.png" width={30} />
        <h2 className="text-purple-400 text-7xl leading-[68px] mx-6 pb-4">
          Testimonios
        </h2>
        <Image alt="estrella" height={30} src="/estrella.png" width={30} />
      </div>
      <div className="rounded-[32px] bg-skin-200 bg-opacity-40 p-20 flex justify-around">
        {/* Paginador (numero, flechas, indicadores) */}
        <div>
          <div
            className="border border-purple-400 border-opacity-40 bg-white bg-opacity-40 text-[190px] w-64 h-72 rounded-[32px] flex items-center justify-center pb-16 mb-12"
            style={{
              backgroundImage: 'url(/incienso.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'auto',
            }}
          >
            1
          </div>
          <div className="flex justify-start items-center">
            <div className="flex justify-start items-center mr-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-purple-400 mr-2">
                &lt;
              </div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-purple-400">
                &gt;
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div
                className={`h-3 w-3 rounded-full border-2 border-purple-400 mr-2 ${
                  IS_OPINION_ACTIVE ? 'bg-purple-400' : 'bg-transparent'
                }`}
              ></div>
              <div className="h-3 w-3 rounded-full border-2 border-purple-400 mr-2"></div>
              <div className="h-3 w-3 rounded-full border-2 border-purple-400 mr-2"></div>
            </div>
          </div>
        </div>
        {/* Contenido (texto, quien, cta) */}
        <div className="ml-20 flex-col ">
          <p className=" text-4xl leading-[3rem] font-medium">{TEXT_OPINION}</p>
          <div className="flex items-center justify-around mt-12">
            <div className="w-full">
              <p className="font-medium text-xl leading-7 mb-2">Paula</p>
              <p
                className={`${proximaNova.variable} font-proxima-nova uppercase leading-3 font-bold text-xs tracking-[0.14em] opacity-60`}
              >
                @paulinacocina
              </p>
            </div>
            <button
              className={`${proximaNova.variable} font-proxima-nova whitespace-nowrap text-xs border-2 rounded-lg border-purple-400 bg-transparent font-bold px-5 py-3`}
            >
              Leer más{' '}
              <span className="border-2 border-purple-400 rounded-full ml-2 px-1">
                +
              </span>
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
