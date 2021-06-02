const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      liblue: colors.lightBlue,
      bray: colors.blueGray,
      cray: colors.coolGray,
      teal: colors.teal,
      cyan: colors.cyan,
      gray: colors.gray,
      red: colors.red,
      indigo: colors.indigo
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
