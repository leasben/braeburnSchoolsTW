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
        blue: '#032765',
        lightBlue: '#2961e5',
      },
      boxShadow: {
        'button': '2px 8px 4px -2px rgba(226, 226, 226, 0.75)',
        'mobileBackground': '-19px 15px 12px -9px rgba(199,199,199,0.63)',
      },
      aspectRatio: {
        'custom': '420 / 100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}


