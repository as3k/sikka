module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            offwhite: "#F6F6F8",
        },
    },
    container: {
        center: true,
    },
    fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif']
    },
    maxWidth: {
        '960': '960px',
    },
    screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '960px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
