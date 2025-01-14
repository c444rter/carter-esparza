module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A', // Black for background
        secondary: '#EDEDED', // Bone/white for text
        light: '#FFFFFF', // Pure white for accents
        dark: '#000000', // Absolute black for contrast
        accent: '#B8B8B8', // Subtle gray for hover and borders
      },
    },
  },
  plugins: [],
};
