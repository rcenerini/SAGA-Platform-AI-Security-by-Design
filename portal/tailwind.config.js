/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'saga-dark': '#0A1628',
        'saga-navy': '#003087',
        'saga-navy-light': '#004AAD',
        'saga-blue': '#009CDE',
        'saga-accent': '#00AEEF',
        'saga-surface': '#0D1F3C',
        'saga-surface-2': '#112244',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A1628 0%, #003087 50%, #004AAD 100%)',
        'card-gradient': 'linear-gradient(135deg, #0D1F3C 0%, #112244 100%)',
        'accent-gradient': 'linear-gradient(135deg, #009CDE 0%, #00AEEF 100%)',
      },
      boxShadow: {
        'saga-glow': '0 0 30px rgba(0, 174, 239, 0.15)',
        'saga-glow-hover': '0 0 40px rgba(0, 174, 239, 0.3)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
