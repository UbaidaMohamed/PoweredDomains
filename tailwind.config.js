/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./App.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        blue: {
          600: "#1E5EBE",
        },
        gray: {
          400: "#BFBFBF",
        },
      },
    },
  },
  plugins: [],
};
