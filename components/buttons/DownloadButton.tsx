import React from 'react';
import { proximaNova } from '../../utils/fonts';
import { ButtonArrows } from '../icons/ButtonArrows';

interface DownloadButtonProps {
  text: string;
}

export const DownloadButton = ({ text }: DownloadButtonProps) => {
  return (
    <button
      className={`${proximaNova.className} flex items-center bg-gold-400 rounded-lg text-white py-4 px-6`}
    >
      {text}
      <span className="ml-3">
        <ButtonArrows />
      </span>
    </button>
  );
};
