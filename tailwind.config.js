/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: '#F5F4F0',
                ink: {
                    primary: '#1A1A1A',
                    secondary: '#4A4A4A',
                },
                accent: {
                    blue: '#1B365D',
                },
                sketch: '#1A1A1A',
            },
            fontFamily: {
                hand: ['Cormorant Garamond', 'serif'],
                tech: ['IBM Plex Mono', 'monospace'],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out forwards',
            },
        },
    },
    plugins: [],
}
