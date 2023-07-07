/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        "bg-dark": "#15191d",
        "bg-darker": "#121212",
        "h-dark-light": "#e3e3e3",
        "p-dark-light": "#FEFEFE",
        "shadow-dark": "#333333"
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
