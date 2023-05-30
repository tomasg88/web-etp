import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import CloseIcon from 'components/icons/close/Close';
import { playfairDisplay } from 'utils/fonts';

const SessionDifferencesModal = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="text-purple-400 opacity-60 text-sm tracking-widest leading-3 font-semibold">
        DIFERENCIA
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black opacity-80 animate-overlay-show fixed inset-0 z-10" />
      <Dialog.Content
        className="animate-content-show fixed top-[50%] left-[50%] max-h-[85vh] w-full max-w-[1000px] translate-x-[-50%] translate-y-[-50%] rounded-[32px] bg-skin-200 py-12 px-20 focus:outline-none z-10"
        style={{
          backgroundImage: 'url(./vector-13.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <Dialog.Title className="text-purple-400 text-xs tracking-[0.14em] leading-3 font-bold text-center mb-16">
            DIFERENCIA
          </Dialog.Title>
          <Dialog.Description
            className={`${playfairDisplay.variable} font-playfair-display text-center`}
          >
            <div>
              <h1 className="text-gold-600 text-[40px] leading-[43px] tracking-wide mb-9 line-clamp-2 px-20">
                ¿Cuál es la diferencia entre la sesión a Distancia y Presencial?
              </h1>
              <p className="text-2xl text-gray-800 text-opacity-80 leading-8 px-[160px]">
                La energía es la misma. A distancia la energía llega y se siente
                perfectamente igual.
              </p>
              <p className="text-purple-400 mt-10 text-xl leading-6 mb-24">
                Lo que cambia es la{' '}
                <span className="font-bold">experiencia</span>
              </p>
            </div>
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              aria-label="Close"
              className="absolute top-7 right-12 inline-flex items-center justify-center"
            >
              <CloseIcon
                className="border border-gold-600 rounded-full box-content p-4"
                height={16}
                width={16}
              />
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default SessionDifferencesModal;
