export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                ink: '#08111f',
                slate: '#122033',
                mist: '#d8e4f2',
                sand: '#f4efe8',
                coral: '#f0876a',
                cyan: '#67d4ff',
                teal: '#2e9f95',
                gold: '#ffd166',
            },
            fontFamily: {
                display: ['"Space Grotesk"', 'sans-serif'],
                body: ['"IBM Plex Sans"', 'sans-serif'],
            },
            boxShadow: {
                soft: '0 24px 60px rgba(8, 17, 31, 0.18)',
            },
            backgroundImage: {
                noise: 'radial-gradient(circle at 20% 20%, rgba(103, 212, 255, 0.18), transparent 0 32%), radial-gradient(circle at 80% 0%, rgba(240, 135, 106, 0.14), transparent 0 25%), radial-gradient(circle at 50% 100%, rgba(255, 209, 102, 0.12), transparent 0 28%)',
            },
        },
    },
    plugins: [],
};
