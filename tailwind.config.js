/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'primary' : 'white',
        'primary-sec' : '#181818',
        'secondary' : '#FF8300',
        'secondary-sec' : '#FFECC5',
        'text': '#3F3F3F',
        'light' : '#C8C8C8',

        'dark-primary': '#181818',
        'dark-primary-sec': 'white',
        'dark-secondary' : '#d8b1d4',
        'dark-secondary-sec' : '#551054',
        'dark-text' : '#E3E3E3',
        'dark-light': '#757575',
      }
    },
  },
  plugins: [],
}
