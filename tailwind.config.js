/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Shantell: ['"Shantell Sans"', "cursive"],
        Playpen: ['"Playpen Sans"', "cursive"],
      },
    },
  },
  plugins: [],
};
