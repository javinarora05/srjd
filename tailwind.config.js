export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#B91C1C',
          amber: '#F59E0B',
          green: '#166534',
          ink: '#111827',
          cream: '#FFFDF7'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        premium: '0 24px 70px rgba(17, 24, 39, 0.14)'
      }
    }
  },
  plugins: []
};
