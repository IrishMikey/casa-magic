/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      objectPosition: {
        "custom-HeroPos": "100% 34%",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(350px, 1fr))",
      },
    },
  },
  plugins: [],
};
