module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'tan-pearl': ['Tan Pearl', 'sans-serif'],
        cirka: ['Arial', 'sans-serif'],
        'dancing-script': ['Arial', 'sans-serif'],
        'great-vibes': ['Tan Pearl', 'sans-serif'],
        'playfair': ['Arial', 'sans-serif'],
        'cormorant': ['Arial', 'sans-serif'],
      },
      colors: {
        'cabane-brown': '#8B4513', // Couleur de fond principale (fallback)
        'cabane-brown-start': '#8B4513', // Début du gradient
        'cabane-brown-mid': '#A0522D', // Milieu du gradient
        'cabane-brown-end': '#D2B48C', // Fin du gradient
        'logo-bg': '#784321', // Couleur de fond du logo
        'logo-brown': '#784321', // Alias pour la couleur marron du logo
      },
      letterSpacing: {
        'extra-wide': '0.2em',
      },
    },
  },
  plugins: [],
};




