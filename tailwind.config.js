module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'offwhite': "#F6F6F8",
        'dark-grey': "#2a2d3d",
        'nord00': '#282c34',
        'nord0': '#2E3440',
        'nord1': '#3B4252',
        'nord2': '#434C5E',
        'nord3': '#4C566A',
        'nord4': '#D8DEE9',
        'nord5': '#E5E9F0',
        'nord6': '#ECEFF4',
        'nord7': '#8FBCBB',
        'nord8': '#88C0D0',
        'nord9': '#81A1C1',
        'nord10': '#5E81AC',
        'nord11': '#BF616A',
        'nord12': '#D08770',
        'nord13': '#EBCB8B',
        'nord14': '#A3BE8C',
        'nord15': '#B48EAD',
      },
      fontSize: {
        'supersize': '16.75rem',
      },
      maxWidth: {
        '960': '960px',
      },
      boxShadow: {
        'double-drop': '0 1px 3px 0 rgb(56 63 82 / 10%), 0 5px 7px 0 rgb(56 63 82 / 15%)'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1rem',
        sm: '1.5rem',
        md: '2rem',
      }
    },
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'nunito': ['Nunito Sans', 'sans-serif'],
      'merriweather': ['Merriweather', 'serif']
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
