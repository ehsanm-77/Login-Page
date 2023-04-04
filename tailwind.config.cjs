const defualtTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './main.js', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        card: '#5BE7C4',
        main: '#F5F7FA',
        header: '#7A57D1',
        button: '#50C1E9',
      },
      fontFamily: {
        sans: ['popins', ...defualtTheme.fontFamily.sans],
      },
      backgroundImage: {
        'hero-pattern': "url('./')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
