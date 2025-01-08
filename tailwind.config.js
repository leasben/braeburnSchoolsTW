/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*html",
    "../src/**/*.js",
  ],
  theme: {
    screens: {
      xm: '320px',
      sm: '640px',
      md: '769px',
      lg: '1024px',
      xl: '1300px',
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['Times New Roman', 'ui-serif'],
      'poppins-extra-light': ['Poppins ExtraLight', 'sans-serif'],
      'poppins-light': ['Poppins Light', 'sans-serif'],
      'poppins-regular': ['Poppins Regular', 'sans-serif'],
      'poppins-medium': ['Poppins Medium', 'sans-serif'],
      'poppins-bold': ['Poppins Bold', 'sans-serif'],
      'freeway-demi-regular': ['FreewayDemi Regular', 'sans-serif'],
      'freeway-demi-medium': ['FreewayDemi Medium', 'sans-serif'],
      'ubuntu-regular': ['Ubuntu Regular', 'sans-serif'],
      'ubuntu-bold': ['Ubuntu Bold', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: '#00205C',
        lightBlue: '#003DA6',
        orange: '#FCB217',
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


