/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0e27',
        'dark-secondary': '#16213e',
        'dark-tertiary': '#0f3460',
        accent: '#8b5cf6',
        'accent-secondary': '#ec4899',
        'accent-tertiary': '#06b6d4',
        'text-primary': '#e0e0e0',
        'text-secondary': '#a0a0a0',
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        sans: ['Sora', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)',
          },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(139, 92, 246, 0.2)',
        'accent': '0 0 30px rgba(139, 92, 246, 0.4)',
      },
    },
  },
  plugins: [],
}
