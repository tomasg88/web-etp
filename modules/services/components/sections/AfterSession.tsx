import React from 'react';
import { SectionContainer } from 'components/section/SectionContainer';
import { playfairDisplay } from 'utils/fonts';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const AfterSessionOne = () => (
  <p
    className={`${playfairDisplay.variable} font-playfair-display text-4xl text-gray-800 mx-auto mt-12 w-[550px]`}
  >
    La foto de la{' '}
    <span className="text-purple-400">Carta del Oráculo de Iluminación</span>{' '}
    que saqué para vos con un mensaje del Universo para este momento presente.
  </p>
);

export default function AfterSessionSection() {
  return (
    <SectionContainer
      backgroundClassNames="bg-skin-200 bg-opacity-40"
      className="px-32 2xl:px-0 pb-20 pt-40"
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
        <Swiper
          centeredSlides={true}
          direction="horizontal"
          loop={true}
          modules={[Mousewheel, Navigation]}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.01,
            thresholdDelta: 10,
            releaseOnEdges: true,
          }}
          navigation={true}
          slidesPerView={1}
          spaceBetween={50}
        >
          {[AfterSessionOne, AfterSessionOne].map((component, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex items-center justify-center w-16 h-16 mx-auto mt-12"
                style={{
                  backgroundImage: 'url(./step-background.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
              >
                <p
                  className={`${playfairDisplay.variable} font-playfair-display text-7xl text-gray-800`}
                >
                  {index + 1}
                </p>
              </div>
              <AfterSessionOne />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
}
