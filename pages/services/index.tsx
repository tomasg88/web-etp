import Image from 'next/image';
import React from 'react';
import { SectionContainer } from '../../components/section/SectionContainer';
import { crimsonPro, playfairDisplay, proximaNova } from '../../utils/fonts';

const TEXT_OPINION =
  '“Llegué a cande por recomendación de una amiga. La contacté para que nos acompañara con sesiones de reiki a distancia para mi suegro que estaba en terapia intensiva por un cuadro de covid grave...';

export default function ServicesPage() {
  const isOpinionActive = true;
  return (
    <>
      {/* Hero */}
      <SectionContainer
        backgroundClassNames="bg-skin-200 bg-opacity-40"
        className="flex items-center justify-center"
      >
        <div className="py-60 text-center w-1/2 z-10">
          <p
            className={`${proximaNova.variable} font-proxima-nova font-semibold text-gold-600 mb-4 tracking-[0.15em]`}
          >
            PRESENCIALES Y A DISTANCIA
          </p>
          <h1
            className={`${playfairDisplay.variable} font-playfair-display text-gold-600 text-7xl leading-[101.8%]`}
          >
            Sesiones de Reiki con Cristales
          </h1>
          <p
            className={`${crimsonPro.variable} font-crimson-pro w-1/2 mx-auto mt-6 text-gray-800 opacity-80`}
          >
            El Reiki es una herramienta de sanación y relajación maravillosa. Te
            brinda paz mental y aporta calma entre otros muchos beneficios.
          </p>
        </div>
        <div className="absolute left-32 z-0">
          <Image
            alt="sesion de reiki"
            height={450}
            src="/sesion-reiki-cover.png"
            width={300}
          />
        </div>
        <div className="absolute right-32 z-0">
          <Image
            alt="figura diamante"
            height={211}
            src="/diamante2.png"
            width={168}
          />
        </div>
      </SectionContainer>

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

      <SectionContainer className="flex justify-between px-32 py-28 pt-8">
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

      <div className="bg-gradient-to-b from-salmon-300 to-skin-200 opacity-40 h-28 block"></div>
      <SectionContainer
        backgroundClassNames="bg-skin-200 bg-opacity-40"
        className="px-32 pt-20"
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

      {/* After session */}
      <SectionContainer
        backgroundClassNames="bg-skin-200 bg-opacity-40"
        className="px-32 pb-20 pt-40"
        style={{
          backgroundImage: 'url(./rama.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: '1150px',
          backgroundPositionY: '10px',
        }}
      >
        <div className="text-center mx-auto">
          <h2
            className={`${playfairDisplay.variable} font-playfair-display text-purple-400 text-6xl leading-[106.8%] text-center mb-4`}
          >
            Al finalizar la sesión
          </h2>
          <span
            className={`${playfairDisplay.variable} font-playfair-display text-xl text-gray-800`}
          >
            Te envío por Whatsapp:
          </span>
          <div
            className="flex items-center justify-center w-16 h-16 mx-auto mt-12"
            style={{
              backgroundImage: 'url(./step-background.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <p
              className={`${playfairDisplay.variable} font-playfair-display text-6xl text-gray-800`}
            >
              1
            </p>
          </div>
          <p
            className={`${playfairDisplay.variable} font-playfair-display text-4xl text-gray-800 mx-auto mt-12 w-[550px]`}
          >
            La foto de la{' '}
            <span className="text-purple-400">Carta del Oráculo</span> de
            Iluminación que saqué para vos con un mensaje del Universo para este
            momento presente.
          </p>
        </div>
      </SectionContainer>
      <div className="bg-gradient-to-t from-salmon-300 to-skin-200 opacity-40 h-28 block"></div>

      {/* Discount section */}
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

      {/* Payments section */}
      <SectionContainer className="py-20 mx-auto flex justify-center text-center items-center">
        <Image alt="estrella" height={70} src="/estrella.png" width={70} />
        <div className="border-[11px] border-white border-opacity-10 rounded-3xl bg-purple-300 w-[800px] px-24 py-10 mx-20">
          <p
            className={`${playfairDisplay.variable} font-playfair-display text-white leading-6 text-2xl mb-8`}
          >
            Formas de pago:
          </p>
          <div className="flex justify-evenly">
            <div className="bg-white bg-opacity-10 p-6 rounded-3xl">
              <Image
                alt="MercadoPago"
                height={76}
                src="/mercadopago.png"
                width={82}
              />
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-3xl">
              <Image
                alt="MercadoPago"
                height={76}
                src="/mercadopago.png"
                width={82}
              />
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-3xl">
              <Image
                alt="PayPal"
                height={76}
                src="/mercadopago.png"
                width={82}
              />
            </div>
          </div>
        </div>
        <Image alt="estrella" height={70} src="/estrella.png" width={70} />
      </SectionContainer>

      {/* Comments / Opinions */}
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
                    isOpinionActive ? 'bg-purple-400' : 'bg-transparent'
                  }`}
                ></div>
                <div className="h-3 w-3 rounded-full border-2 border-purple-400 mr-2"></div>
                <div className="h-3 w-3 rounded-full border-2 border-purple-400 mr-2"></div>
              </div>
            </div>
          </div>
          {/* Contenido (texto, quien, cta) */}
          <div className="ml-20 flex-col ">
            <p className=" text-4xl leading-[3rem] font-medium">
              {TEXT_OPINION}
            </p>
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
    </>
  );
}
