/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '490px'},
        'xxs': {'max': '400px'},    
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}