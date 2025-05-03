/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#087E8B',
          light: '#61A0A8',
          dark: '#055E6A',
        },
        secondary: {
          DEFAULT: '#F5B700',
          light: '#FFD24C',
          dark: '#D19A00',
        },
        accent: {
          DEFAULT: '#FF5A5F',
          light: '#FF8B8F',
          dark: '#E73D42',
        },
        navy: '#0B3954',
        sage: '#EFF6E0',
        charcoal: '#333333',
      },
    },
  },
  plugins: [],
};