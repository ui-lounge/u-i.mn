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
      maxWidth: {
        menu: "500px",
      },
      minHeight: {
        menu: "800px",
      },
      colors: {
        menu: "#fffcf8",
        brand: {
          primary: "#EAD681",
          secondary: "#494949",
        },
      },
    },
  },
  plugins: [],
};
