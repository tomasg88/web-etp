/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse-completely 5s linear infinite',
      },
      colors: {
        gray: {
          100: '#F8F8F8',
          800: '#2E3439',
        },
        gold: {
          300: '#D0AB67',
          400: '#C8AC86',
          500: '#C9AD87',
          600: '#9B8054',
        },
        orange: {
          400: '#F7966B',
        },
        pink: {
          200: '#FDDED6',
          300: '#FCDED7',
          400: '#FCDDD6',
        },
        purple: {
          300: '#B19ACA',
          400: '#8D64AA',
        },
        salmon: {
          300: '#FCFBFB',
          400: '#FCD3C1',
        },
        skin: {
          400: '#FCD3C1',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        playfair: ['Playfair'],
        'proxima-nova': ['"Proxima Nova"'],
      },
      keyframes: {
        'pulse-completely': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
