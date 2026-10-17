/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#171717',
          surface: '#202020',
          card: '#222222',
          hover: '#2A2A2A',
          border: 'rgba(255, 255, 255, 0.08)',
          subtle: 'rgba(255, 255, 255, 0.04)',
        },
        accent: {
          orange: '#FF4D16',
          'orange-hover': '#E03D0A',
          'orange-light': '#FF6B3D',
        },
        content: {
          primary: '#FFFFFF',
          secondary: '#BDBDBD',
          muted: '#808080',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 77, 22, 0.4)',
        'panel': '0 10px 40px -10px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
