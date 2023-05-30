/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1.125rem",
        md: "1.6rem",
      },

      screens: {
        sm: "550px",
        md: "600px",
        lg: "700px",
        xl: "800px",
        "2xl": "900px",
      },
    },
  },
  plugins: [],
};
