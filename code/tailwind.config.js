/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {  DEFAULT: '#01354A',  50: '#80D9FD',  100: '#6CD3FD',  200: '#43C7FC',  300: '#1BBBFC',  400: '#03A8EB',  500: '#038BC3',  600: '#026F9B',  700: '#025272',  800: '#01354A',  900: '#000D13'},
      }
    },
  },
  plugins: [],
}