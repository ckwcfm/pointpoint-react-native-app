import { useTheme } from '@react-navigation/native'
import { TextProps } from 'react-native'
import { Text as RNText } from 'react-native'
import { Theme } from '../Theme'

const Text: React.FC<TextProps> = (props) => {
  const { colors } = useTheme() as Theme
  return (
    <>
      <RNText {...props} style={[{ color: colors.text }, props.style]}></RNText>
    </>
  )
}
export default Text
