/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        slateblue: "#4b49b8",
        gainsboro: "#d9d9d9",
        indigo: "#500188",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "7xl": "26px",
      },
    },
    fontSize: {
      "8xl-1": "27.1px",
      "16xl": "35px",
      "13xl-1": "32.1px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
