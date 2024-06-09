import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#FD6F00",
        secondary: "#424242",
        white:"#fff",
        black:"#000",
        css:"#039BE5"
        
      },
      screens: {
        'xs': '480px',  // Extra small devices (phones)
        'sm': '640px',  // Small devices (tablets)
        'md': '768px',  // Medium devices (desktops)
        'lg': '1024px', // Large devices (desktops)
        'xl': '1280px', // Extra large devices (desktops)
        '2xl': '1536px',// 2x Extra large devices (large desktops)
      },
    },
  },
  plugins: [],
};
export default config;