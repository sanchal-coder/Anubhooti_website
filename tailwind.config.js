/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        main:'hsl(15,47%,65%)',
        secondary:'hsl(194,16%,57%)',
        footer: 'hsl(176,1%,20%)',
      },
      width:{
        '251': '62.75',
      },
      fontFamily:{
        lora:"'Lora',serif",
        Tinos: "'Tinos', serif",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};