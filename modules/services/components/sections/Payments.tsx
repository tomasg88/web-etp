import Image from 'next/image';
import React from 'react';
import { SectionContainer } from '../../../../components/section/SectionContainer';
import { playfairDisplay } from '../../../../utils/fonts';

export default function PaymentsSection() {
  return (
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
            <Image alt="PayPal" height={76} src="/mercadopago.png" width={82} />
          </div>
        </div>
      </div>
      <Image alt="estrella" height={70} src="/estrella.png" width={70} />
    </SectionContainer>
  );
}
