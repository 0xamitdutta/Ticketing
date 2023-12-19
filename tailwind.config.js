/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: "#CD8D7A",
        page: "#DBCC95",
        card: "#47566a",
        "card-hover": "#5e6e85",
        "card-active": "#7b8ca0",
        "card-border": "#1c2530",
        "card-border-hover": "#2b3441",
        "default-text": "#e2e8f0",
        "blue-accent": "#4fd1c5",
        "blue-accent-hover": "#38b2ac",
      }
    },
  },
  plugins: [],
}
