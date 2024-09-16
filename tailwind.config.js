module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        extend: {
            colors: {
                primary: '#006699',
                secondary: '#0099ff',
                tertiary: '#99a0a3',
                border: '#1a2e35',
                background: '#ffffff',
            },
            backgroundImage: {
                'instagram-gradient': 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)',
            },
            keyframes: {
                'gradient-fade': {
                    '0%': {
                        backgroundSize: '0% 100%',
                    },
                    '100%': {
                        backgroundSize: '100% 100%',
                    },
                },
                vote: {
                    '0%, 100%': {
                        transform: 'rotate(0deg)',
                    },
                    '25%': {
                        transform: 'rotate(-30deg)',
                    },
                    '75%': {
                        transform: 'rotate(30deg)',
                    },
                },
            },
            animation: {
                vote: 'vote 1s ease-in-out',
                'gradient-fade': 'gradient-fade 1s ease-in-out',
            },
        },
    },
    variants: {
        extend: {
            backgroundImage: ['hover'],
        },
    },
    plugins: [],
};