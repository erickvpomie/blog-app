/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-light': '#f5f5f7',
        'space-black': '#0b0a10',
        'space-blue': '#016ff0',
        'space-gray': '#f0f0f0'
      }
    }
  },
  plugins: []
}
