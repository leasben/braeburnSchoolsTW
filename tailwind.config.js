/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*html",
    "../src/**/*.js",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily:{
      sans: ['sans-serif'],
      serif: ['Times New Roamn','ui-serif'],
      'poppins-extra-light':['Poppins ExtraLight', 'sans-serif'],
      'poppins-light':['Poppins Light', 'sans-serif'],
      'poppins-regular':['Poppins Regular', 'sans-serif'],
      'poppins-medium':['Poppins Medium', 'sans-serif'],
      'poppins-bold':['Poppins Bold', 'sans-serif'],

    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: '#08265a',
        green: '#07522c',
      }, 
    },
  },
  plugins: [],
}