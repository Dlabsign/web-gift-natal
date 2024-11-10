// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SourceSerifPro: "var(--font-sans)", // Menggunakan variabel CSS untuk font
        SourceSerifProItl: "var(--font-italicL)", // Menggunakan variabel CSS untuk font
        imperialScript: "var(--font-script)", // Menggunakan variabel CSS untuk font
      },
      colors: {
        "primary-color": "linear-gradient(90deg, #12595C 0%, #1A8A90 100%)",
      },
    },
  },
  plugins: [],
};
