/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        IBM_Plex_Sans: 'IBM Plex Sans, sans-serif',
      },
    },
    // colors: {
    //   'cream': '#F5F5F7',
    //   'appleBlue': '#007AFF'
    // }
  },
  plugins: [],
};
