import React, { useState } from 'react';
import { proximaNova } from 'utils/fonts';

const COMMON_TEXT_CSS = 'text-sm tracking-widest leading-3 font-semibold';
const IS_ACTIVE_CSS = 'border-b-2 border-purple-400 text-purple-400 font-bold';
const IS_INACTIVE_CSS = 'text-purple-400 opacity-60';

enum SESSION_TYPE {
  PRESENT,
  REMOTE,
}

export default function ControlPanel(): JSX.Element {
  const [selectedType, setSelectedType] = useState<SESSION_TYPE>(
    SESSION_TYPE.PRESENT,
  );

  const handlePresentClick = () => setSelectedType(SESSION_TYPE.PRESENT);
  const handleRemoteClick = () => setSelectedType(SESSION_TYPE.REMOTE);
  return (
    // Wrapper
    <div className="fixed w-full bottom-12 flex justify-center">
      <div
        className={`${proximaNova.variable} font-proxima-nova rounded-3xl bg-salmon-300 mx-auto border border-purple-400 border-opacity-10 flex items-center px-6 py-3`}
        style={{ boxShadow: '-24px 28px 53px rgba(60, 40, 11, 0.08)' }}
      >
        <div className="flex items-center justify-between">
          <button
            className={`${
              selectedType === SESSION_TYPE.PRESENT
                ? IS_ACTIVE_CSS
                : IS_INACTIVE_CSS
            } ${COMMON_TEXT_CSS} py-8`}
            onClick={handlePresentClick}
          >
            PRESENCIAL
          </button>
          <button
            className={`${
              selectedType === SESSION_TYPE.REMOTE
                ? IS_ACTIVE_CSS
                : IS_INACTIVE_CSS
            } ${COMMON_TEXT_CSS} py-8 mx-6`}
            onClick={handleRemoteClick}
          >
            A DISTANCIA
          </button>
          <div className={`${IS_INACTIVE_CSS} ${COMMON_TEXT_CSS} py-8`}>
            DIFERENCIA
          </div>
        </div>
        <div className="w-2 h-2 rotate-45 bg-gold-400 block mx-6"></div>
        <div>
          <button
            className={`${COMMON_TEXT_CSS} bg-purple-400 rounded-lg px-5 py-7 text-salmon-300`}
          >
            SACAR TURNO
          </button>
        </div>
      </div>
    </div>
  );
}
