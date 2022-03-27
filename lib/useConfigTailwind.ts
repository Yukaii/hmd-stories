import { useEffect } from 'react'

export default function useConfigTailwind () { 
  useEffect(() => {
    const tailwind = (window as any)['tailwind']
  
    if (typeof tailwind !== 'undefined') {
      tailwind.config = {
        theme: {
          extend: {
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
          },
          fontSize: {
            1: '8px',
            2: '10px',
            3: '12px',
            4: '14px',
            5: '16px',
            6: '18px',
            7: '20px',
            8: '22px',
            9: '24px',
            10: '26px',
            11: '28px',
            12: '30px',
            13: '32px',
            14: '34px',
            15: '36px',
            16: '38px',
            17: '40px',
            18: '42px',
            19: '44px',
            20: '46px',
            21: '48px',
            22: '50px',
            23: '52px',
            24: '54px',
            25: '56px',
            26: '58px',
            27: '60px'
          }
        },
        plugins: [],
        corePlugins: {
          preflight: false,
          container: false
        }  
      };
    }
  }, [])
}
