/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    colors: {
      'bg-color-white': '#FFFFFF',
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
      width: {
        'icon-md': '15px',
        'icon-sm': '12px',
        'line-vertical': '2px'
      },
      maxWidth: {
        'image': '55px',
        'image-sm': '37px',
      },
      height: {
        'icon-md': '15px',
        'icon-sm': '12px'
      },
      maxHeight: {
        'image': '55px',
        'image-sm': '37px',
      },
      flex: {
        '15': '15%',
        '85': '85%'
      },
      spacing: {
        '2px': '2px'
      }
    }
  },
  corePlugins: {
    preflight: true
  },
  plugins: [],
}

