import { Crimson_Pro, Playfair_Display } from '@next/font/google';
import localFont from '@next/font/local'

export const billionReach = localFont({
  src: '../public/fonts/Billion-Reach.otf'
});

export const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
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
  ],
  variable: '--font-proxima-nova'
})