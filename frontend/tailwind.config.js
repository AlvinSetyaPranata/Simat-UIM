/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark' : '#2F4858',
        'base' : '#00A973',
      },
      
      fill: {
        'dark' : '#2F4858',
      },
      
      textColor: {
        'dark' : '#2F4858',
      },

      fontFamily: {
        'common' : 'Open Sans, sans-serif'
      }
    },
  },
  plugins: [],
}
