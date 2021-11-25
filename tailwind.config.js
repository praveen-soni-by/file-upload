module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0},
          '100%': {opacity:1 },
        },
      }),
      colors: {
        'primary': '#0099ff',
        'secondary': '#243c5a',
        'primary-light': '#243c5a'
      },
      backgroundSize: {
        '50%': '50%',
      },
      borderRadius: ['hover', 'focus'],
      screens: {
        'xxm': '500px', // min-width
        'xx300': '300px', // min-width
      },
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      textColor: ['visited'],
      backgroundColor: ['disabled','even']
    },
  },
  plugins: [],
}
