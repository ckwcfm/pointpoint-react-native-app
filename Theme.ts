import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export const Light = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
  },
}

export const Dark = {
  ...DarkTheme,
  dark: true,
  colors: {
    ...DarkTheme.colors,
  },
}
