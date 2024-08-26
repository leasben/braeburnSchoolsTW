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
        border: '#bc0000',
        white: '#ffffff',
        black: '#000000',
        green: '#409444',
        peach: '#93CC58',
        grey: '#e5e5e5',
        darkGrey: '#737373',
      }, 
    },
  },
  plugins: [],
}