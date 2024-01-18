/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0094d2",
        "light-blue": "#5bcff4",
        "dark-green": "#52bc9f",
        "light-green": "#6edbb9",
        "light-text": "#fff",
        "dark-text": "#808080",
        "dark-bg": "#261f22",
      },
    },
  },
  plugins: [],
};
