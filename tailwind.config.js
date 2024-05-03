/** @type {import('tailwindcss').Config} */
module.exports = {
  // altere o content com " ["./**/*.{html,js}"] "
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/assets/bg.png')",
      },
    },
  },
  plugins: [],
};
