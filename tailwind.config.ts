import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Estos colores puedes generarlos en https://material-foundation.github.io/material-theme-builder/
        // O puedes generar tu propia estructura de colores.
        light: {
          primary: '#000022',
          surfaceTint: '#555A92',
          onPrimary: '#FFFFFF',
          primaryContainer: '#1E2258',
          onPrimaryContainer: '#ABAFEE',
          secondary: '#5B5C75',
          onSecondary: '#FFFFFF',
          secondaryContainer: '#E5E4FF',
          onSecondaryContainer: '#474860',
          tertiary: '#0C0012',
          onTertiary: '#FFFFFF',
          tertiaryContainer: '#3D1848',
          onTertiaryContainer: '#D4A3DD',
          error: '#BA1A1A',
          onError: '#FFFFFF',
          errorContainer: '#FFDAD6',
          onErrorContainer: '#410002',
          background: '#FCF8FE',
          onBackground: '#1B1B1F',
          surface: '#FCF8FE',
          onSurface: '#1B1B1F',
          surfaceVariant: '#E3E1ED',
          onSurfaceVariant: '#46464F',
          outline: '#777680',
          outlineVariant: '#C7C5D1',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#303034',
          inverseOnSurface: '#F3EFF5',
          inversePrimary: '#BEC2FF',
          primaryFixed: '#E0E0FF',
          onPrimaryFixed: '#10144B',
          primaryFixedDim: '#BEC2FF',
          onPrimaryFixedVariant: '#3D4279',
          secondaryFixed: '#E0E0FD',
          onSecondaryFixed: '#181A2F',
          secondaryFixedDim: '#C4C4E0',
          onSecondaryFixedVariant: '#44455C',
          tertiaryFixed: '#FCD7FF',
          onTertiaryFixed: '#2F093A',
          tertiaryFixedDim: '#E8B5F0',
          onTertiaryFixedVariant: '#5F3769',
          surfaceDim: '#DCD9DE',
          surfaceBright: '#FCF8FE',
          surfaceContainerLowest: '#FFFFFF',
          surfaceContainerLow: '#F6F2F8',
          surfaceContainer: '#F0EDF2',
          surfaceContainerHigh: '#EAE7EC',
          surfaceContainerHighest: '#E4E1E7'
        },
        dark: {
          primary: '#BEC2FF',
          surfaceTint: '#BEC2FF',
          onPrimary: '#262B61',
          primaryContainer: '#070B44',
          onPrimaryContainer: '#989CDA',
          secondary: '#C4C4E0',
          onSecondary: '#2D2F45',
          secondaryContainer: '#3C3E54',
          onSecondaryContainer: '#D2D2EF',
          tertiary: '#E8B5F0',
          onTertiary: '#472151',
          tertiaryContainer: '#270233',
          onTertiaryContainer: '#C090C9',
          error: '#FFB4AB',
          onError: '#690005',
          errorContainer: '#93000A',
          onErrorContainer: '#FFDAD6',
          background: '#131317',
          onBackground: '#E4E1E7',
          surface: '#131317',
          onSurface: '#E4E1E7',
          surfaceVariant: '#46464F',
          onSurfaceVariant: '#C7C5D1',
          outline: '#918F9A',
          outlineVariant: '#46464F',
          shadow: '#000000',
          scrim: '#000000',
          inverseSurface: '#E4E1E7',
          inverseOnSurface: '#303034',
          inversePrimary: '#555A92',
          primaryFixed: '#E0E0FF',
          onPrimaryFixed: '#10144B',
          primaryFixedDim: '#BEC2FF',
          onPrimaryFixedVariant: '#3D4279',
          secondaryFixed: '#E0E0FD',
          onSecondaryFixed: '#181A2F',
          secondaryFixedDim: '#C4C4E0',
          onSecondaryFixedVariant: '#44455C',
          tertiaryFixed: '#FCD7FF',
          onTertiaryFixed: '#2F093A',
          tertiaryFixedDim: '#E8B5F0',
          onTertiaryFixedVariant: '#5F3769',
          surfaceDim: '#131317',
          surfaceBright: '#39393D',
          surfaceContainerLowest: '#0E0E12',
          surfaceContainerLow: '#1B1B1F',
          surfaceContainer: '#1F1F23',
          surfaceContainerHigh: '#2A292E',
          surfaceContainerHighest: '#353439'
        }
      },
      opacity: {
        '8': '.08',
        '12': '.12',
        '16': '.16'
      }
    }
  },
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            primary: '#C00100',
            secondary: '#775651'
          }
        },
        dark: {
          // ...
          colors: {
            primary: '#FFB4A8',
            secondary: '#E7BDB6'
          }
        }
        // ... custom themes
      }
    })
  ]
}
export default config
