module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        800: "800px",
      },
      aspectRatio: {
        image: "2.8 / 4",
      },
      colors: {
        brand: {
          primary: "#EAD681",
          secondary: "#494949",
        },
      },
    },
  },
  plugins: [],
};
