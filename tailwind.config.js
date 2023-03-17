/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanitregular: ['kanitregular'],
        kanitmedium: ['kanitmedium'],
        kanitlight: ['kanitlight'],
      }
    },
  },
  plugins: [],
}
