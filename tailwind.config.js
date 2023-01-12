const { customColors } = require("./lib/colors.js");
const BREAKPOINTS = require("./lib/breakpoints.js");
/** @type {import('tailwindcss').Config} */

module.exports = {
  prefix: "",
  content: [
    "./+(components|pages|views|lib|content-ui|membership-ui|rankings-ui|shared-components)/{*,**/*}.{tsx,jsx,ts,js}",
  ],
  important: false,
  separator: ":",
  theme: {
    placeholderColor: (theme) => theme("colors"),
    aspectRatio: {
      // defaults to {}
      none: 0,
      square: [1, 1], // or 1 / 1, or simply 1
      "16/9": [16, 9], // or 16 / 9
      "16/10": [16, 10], // or 16 / 9
      "4/3": [4, 3], // or 4 / 3
      "21/9": [21, 9], // or 21 / 9
    },
    linearGradientColors: {
      overlay: [
        "rgba(0,0,0,.95)",
        "rgba(0,0,0,.02) 20%",
        "transparent 45%",
        "rgba(0,0,0,.98) 100%",
      ],
      navigation: ["rgba(0,0,0,.65)", "rgba(0,0,0,0)"],
    },

    extend: {
      fill: {
        white: "#fff",
      },
      gridTemplateRows: {
        vertical: "3fr 2fr",
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
      },
      colors: customColors,
      screens: {
        xs: BREAKPOINTS.XS,
        sm: BREAKPOINTS.SM,
        md: BREAKPOINTS.MD,
        lg: BREAKPOINTS.LG,
        xl: BREAKPOINTS.XL,
      },
      inset: (theme, { negative }) => ({
        0: "0",
        auto: "auto",
        "-50": "-50%",
        50: "50%",
        "-100": "-100%",
        100: "100%",
        ...theme("spacing"),
        ...negative(theme("spacing")),
        ...theme("width"),
        ...negative(theme("width")),
      }),
      fontSize: {
        "4xs": "10px",
        "3xs": "12px",
        "2xs": "13px",
        xs: "15px",
        sm: "16px",
        base: "18px",
        lg: "20px",
        xl: "24px",
        "2xl": "30px",
        "3xl": "40px",
        "4xl": "50px",
      },
      fontFamily: {
        ssp: ["Source Sans Pro", "sans-serif"],
        serif: [
          "AktivGrotesk Regular",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        italic: [
          "AktivGrotesk Italic",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        bold: [
          "AktivGrotesk Bold",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        extrabold: [
          "AktivGrotesk XBold",
          "AktivGrotesk Bold",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },

      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },

      gridColumn: {
        "span-16": "span 16 / span 16",
      },

      transformOrigin: {
        "top-center": "50% 0",
      },

      spacing: {
        xs: "5px",
        sm: "10px",
        md: "15px",
        lg: "20px",
        xl: "25px",
        "2xl": "30px",
        "3xl": "40px",
        "4xl": "50px",
        "5xl": "60px",
        50: "50%",
        100: "100%",
      },

      margin: {
        wrap: "calc((100vw - 100rem) / 2)",
      },

      height: (theme) => ({
        "6/10": "60vh",
        ...theme("spacing"),
        ...theme("width"),
        screen: "100vh",
        112: "36rem",
        "min-content": "min-content",
        "max-content": "max-content",
      }),

      width: (theme) => ({
        "min-content": "min-content",
        "max-content": "max-content",
      }),

      maxHeight: {
        0: "0",
        "6/10": "60vh",
        124: "42rem",
      },

      minHeight: (theme) => ({
        ...theme("spacing"),
        "6/10": "60vh",
        112: "36rem",
      }),

      minWidth: (theme) => ({
        ...theme("width"),
      }),

      maxWidth: {
        "7xl": "72rem",
        "8xl": "100rem",
        hero: `52rem`,
      },

      opacity: {
        95: "0.95",
      },
    },
  },
  plugins: [
    require("tailwindcss-aspect-ratio"),
    require("tailwindcss-gradients"),
    require("tailwindcss-pseudo-elements"),
  ],
};
