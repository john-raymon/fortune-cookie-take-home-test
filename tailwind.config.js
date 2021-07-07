module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        'custom-blue': '#0AB5FF',
        'custom-purple': '#9146FF',
        'custom-green': '#20C09F', 
        'custom-dark-blue': '#0066FF',
        'custom-dark-purple': '#5A34F3',
        'custom-light-blue': '#00C1CD'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ]
}
