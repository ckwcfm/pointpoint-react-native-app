import {
  DefaultTheme,
  DarkTheme,
  Theme as RNNTheme,
} from '@react-navigation/native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface Colors {
  primary: string
  background: string
  card: string
  text: string
  border: string
  notification: string
  pleceHolderText: string
  textFieldBackground: string
  hole: string
  red: string
  green: string
  shadow: string
  disable: string
}

export interface Theme extends RNNTheme {
  colors: Colors
}

export const Light: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#059669',
    background: '#f9fafb',
    pleceHolderText: Colors.border,
    textFieldBackground: '#e5e7eb',
    red: '#dc2626',
    green: '#15803d',
    hole: '#e2e8f0',
    text: '#0f172a',
    shadow: 'black',
    disable: '#d1d5db',
  },
}

export const Dark: Theme = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#10b981',
    border: '#0f172a',
    card: '#111827',
    background: '#1f2937',
    pleceHolderText: '#6e6e6e',
    textFieldBackground: '#374151',
    red: '#ef4444',
    green: '#22c55e',
    hole: '#475569',
    text: '#f8fafc',
    shadow: 'transparent',
    disable: '#6b7280',
  },
}
