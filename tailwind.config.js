// js/tailwind.config.js
tailwind.config = {
    theme: {
        extend: {
            colors: {
                wood: {
                    900: '#1a120b',
                    800: '#2c1e16',
                    700: '#3e2a1e',
                },
                laser: {
                    DEFAULT: '#ff5e00',
                    glow: '#ff9500',
                },
                leather: '#8b5a2b'
            },
            fontFamily: {
                cinzel: ['Cinzel', 'serif'],
                inter: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'rustic-pattern': "linear-gradient(to bottom, rgba(26, 18, 11, 0.9), rgba(26, 18, 11, 0.95)), url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')",
            }
        }
    }
}
