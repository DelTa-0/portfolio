/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["satoshiregular", "ui-sans-serif", "system-ui"],
        heading: ["satoshibold", "satoshiregular"],
      },
    },
  },
  plugins: [],
};
