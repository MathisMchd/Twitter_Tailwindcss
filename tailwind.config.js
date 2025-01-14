/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    colors: {
      'primaryColor': '#4C9EEB',
      'text-primary-color': '#141619',
      'text-secondary-color': '#687684',
      'accent-color': '#4C9EEB',
      'line-color': '#CED5DC',
      'red': '#DC0000'
    },
    fontSize: {
      'text-small': '12px',
      'text-medium': '14px',
      'text-large': '16px',
    },
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      fontFamily: {
        'sf-pro': ['sf-pro-text', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

