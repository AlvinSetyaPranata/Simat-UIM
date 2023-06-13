/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark' : '#2F4858',
        'base' : '#00A973',
        'base-linear' : 'linear-gradient(115.81deg, #40A763 3.47%, rgba(153, 255, 222, 0.95) 57.43%, #007952 105.85%);'
      },
      
      fill: {
        'dark' : '#2F4858',
      },
      
      textColor: {
        'dark' : '#2F4858',
        'gold' : '#ECE421'
      },

      fontFamily: {
        'common' : 'Open Sans, sans-serif'
      }
    },
  },
  plugins: [],
}
