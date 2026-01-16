/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        booktheme: {
          primary: "#024343",
          secondary: "#036666",
          accent: "#028484",
          "base-100": "#E4E4E4",
          "base-content": "#024343",
        },
      },
    ],
  },
};
