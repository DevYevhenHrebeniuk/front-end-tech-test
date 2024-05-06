import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Monument: ['var(--monumentExtReg)', "sans-serif"],
        SatoshiMedium: ['var(--satoshiMd)', "sans-serif"],
        SatoshiRegular: ['var(--satoshiReg)', "sans-serif"],
        SatoshiBold: ['var(--satoshiBold)', "sans-serif"]
      },
      fontSize: {
        'xsmall': '10px',
        "small": '18px',
        "medium": '22px',
        'large': '38px',
        'xlarge': '68px',
        '4xl': '2.441rem',
        '5xl': '3.052rem'
      },
      colors: {
        "lightBlue": '#3D8BFF',
        "purple-650": '#AB23FF',
        "darkGray": '#13171D'
      },
      lineHeight: {
        'title': '1.1'
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
};
export default config;
