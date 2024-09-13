/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*html",
    "../src/**/*.js",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '769px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['Times New Roman', 'ui-serif'],
      'poppins-extra-light': ['Poppins ExtraLight', 'sans-serif'],
      'poppins-light': ['Poppins Light', 'sans-serif'],
      'poppins-regular': ['Poppins Regular', 'sans-serif'],
      'poppins-medium': ['Poppins Medium', 'sans-serif'],
      'poppins-bold': ['Poppins Bold', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: '#08265a',
        green: '#07522c',
        bgGrey: '#d0d0d04f',
        lightGrey: '#f4f4f4',
      },
      boxShadow: {
        'custom-inset': 'inset 1px 4px 8px 1px rgba(0, 0, 0, 0.1)', // Services Custom inset box shadow
        'custom-inset-2': 'inset 1px -1px 5px 1px #0000001a', // Articles Custom inset box shadow
      },
      backgroundImage: {
        'servicesBg': 'linear-gradient(360deg, hsla(0, 2%, 90%, 1) 0%, hsla(60, 100%, 100%, 1) 61%)',
      },
    },
  },
  plugins: [],
}


