/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}", // Inclui arquivos CSS explicitamente
    "node_modules/flowbite/**/*.js",
  ],

  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide'),
    require("@tailwindcss/aspect-ratio"),
  ],
};