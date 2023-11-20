/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myColor: 'rgb(252, 233, 197)',
      },
    },
  },
  plugins: [],
}