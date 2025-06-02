/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          colors: {
            'elegant': {
              // Tons de marsala e nude
              50: '#FAF0E6',    // Nude claro
              100: '#F5D4C0',   // Nude suave
              200: '#E6B899',   // Nude médio
              300: '#D69B7D',   // Marsala claro
              400: '#C47C5C',   // Marsala médio
              500: '#AB5F3C',   // Marsala principal
              600: '#8F4A2D',   // Marsala escuro
              700: '#73381E',   // Marsala muito escuro
              800: '#5A2C18',   // Marsala profundo
              900: '#40201B',   // Marsala quase preto
            },
            'rose': {
              // Tons suaves de rosa
              50: '#FFF0F3',
              100: '#FFE4E1',
              200: '#FFC0CB',
              300: '#FFB6C1',
              400: '#DB7093',
              500: '#C71585',
              600: '#A0522D',   // Tom terroso
              700: '#8B4513'    // Marrom avermelhado
            }
          },
          fontFamily: {
            'elegant': ['Playfair Display', 'Montserrat', 'sans-serif']
          },
          boxShadow: {
            'elegant': '0 10px 25px rgba(171, 95, 60, 0.15)',
            'soft': '0 8px 20px rgba(171, 95, 60, 0.1)'
          }
        }
      },
    plugins: [],
  }