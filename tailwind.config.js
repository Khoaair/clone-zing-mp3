/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Inter', 'san-serif'],
    },
    extend: {
      width: {
        240: '240px',
        329: '329px',
        'logo-h': '40px',
        'logo-w': '120px',
      },
      padding: {
        'logo-p': '0 25px 0 28px',
      },
      colors: {
        activeColor: '#3E9797',
      },
    },
  },
  plugins: [],
};
