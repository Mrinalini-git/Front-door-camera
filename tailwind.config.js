/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cctv: {
          dark: '#0a0d14',
          panel: '#111726',
          card: '#161f33',
          border: '#23304a',
          accent: '#06b6d4',
          danger: '#ef4444',
          warning: '#f59e0b',
          success: '#10b981'
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flash-alert': 'flash 0.5s ease-in-out infinite alternate',
      },
      keyframes: {
        flash: {
          '0%': { backgroundColor: 'rgba(239, 68, 68, 0.15)' },
          '100%': { backgroundColor: 'rgba(239, 68, 68, 0.35)' },
        }
      }
    },
  },
  plugins: [],
}
