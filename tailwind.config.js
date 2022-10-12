/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : 'white',
        'primary-sec' : 'black',
        'secondary' : '#FF8300',
        'secondary-sec' : '#FFECC5',
        'light' : 'gray'
      }
    },
  },
  plugins: [],
}
