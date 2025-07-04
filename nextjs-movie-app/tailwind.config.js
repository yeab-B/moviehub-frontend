module.exports = {
  content: [
   './app/**/*.{js,ts,jsx,tsx}',     // Next.js App Router
    './pages/**/*.{js,ts,jsx,tsx}',   // (if using Pages too)
    './components/**/*.{js,ts,jsx,tsx}', // Your Button lives here
    './**/*.{js,ts,jsx,tsx}',
    '**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
