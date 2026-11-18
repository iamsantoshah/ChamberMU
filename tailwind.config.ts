import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF8',
          100: '#FEF9F3', // Primary brand background
          200: '#F7EFE4',
          300: '#EDE2D1',
          400: '#DCCDB6',
          500: '#C2AE91',
        },
        onyx: {
          900: '#0B0B0C',
          800: '#161719',
          700: '#222428',
          600: '#34373D',
          500: '#525760',
        },
        gold: {
          400: '#C6A870',
          500: '#B08F52',
          600: '#94753D',
        },
        border: '#E7DFD5',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'Montserrat', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      boxShadow: {
        chambers: '0 12px 36px -4px rgba(11, 11, 12, 0.06), 0 4px 16px -2px rgba(11, 11, 12, 0.03)',
        card: '0 4px 20px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
