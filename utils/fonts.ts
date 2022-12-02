import { Crimson_Pro, Playfair_Display } from '@next/font/google';
import localFont from '@next/font/local'

export const billionReach = localFont({
  src: '../public/fonts/Billion-Reach.otf'
});

export const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400'],
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
});

export const proximaNova = localFont({
  src: [
    {
      path: '../public/fonts/Proxima-Nova-Black.otf',
      weight: '900',
    },
    {
      path: '../public/fonts/Proxima-Nova-Bold.otf',
      weight: '600',
    },
    {
      path: '../public/fonts/Proxima-Nova-Extrabold.otf',
      weight: '800',
    },
    {
      path: '../public/fonts/Proxima-Nova-Regular.otf',
      weight: '400',
    },
  ]
})