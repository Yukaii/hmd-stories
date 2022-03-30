const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sourceSans: 'Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
      },
      colors: {
        gray: {
          100: '#F8F8F8',
          200: '#E7E7E7',
          300: '#CDCDCD',
          400: '#BEBEBE',
          500: '#8f8f8f',
          600: '#888888',
          700: '#686868',
          800: '#4f4f4f',
          850: '#484848',
          900: '#262626'
        },
        black: {
          default: '#000',
          brand: '#333'
        },
        yellow: {
          default: '#F7A004',
          prime: '#EBB047'
        },
        red: {
          default: '#EA4335',
          dark: '#FF6363'
        },
        green: {
          default: '#5CB85C'
        },
        blue: {
          default: '#337AB7',
          dark: '#66B5F0'
        }
      },
      spacing: {
        '0': '0px',
        'px': '1px',
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px',
        '2.5': '10px',
        '3': '12px',
        '3.5': '14px',
        '4': '16px',
        '4.5': '18px',
        '5': '20px',
        '6': '24px',
        '6.5': '26px',
        '7': '28px',
        '7.5': '30px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '15': '60px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '30': '120px',
        '32': '128px',
        '36': '144px',
        '40': '160px',
        '44': '176px',
        '48': '192px',
        '52': '208px',
        '56': '224px',
        '60': '240px',
        '64': '256px',
        '72': '288px',
        '80': '320px',
        '96': '384px',
        '100': '400px',
        '150': '600px',
        '224': '900px'
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        md: '6px',
        lg: '8px',
        full: '9999px'
      },
      borderWidth: {
        1: '1px'
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: true,
    container: false
  }  
};

module.exports = config
