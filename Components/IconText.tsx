import { View, ViewProps, TextStyle, ColorValue } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import Text from './Text'
import { useTheme } from '@react-navigation/native'
import { Theme } from '../Theme'

interface Props extends ViewProps {
  icon: keyof typeof Icon.glyphMap
  text: string | number
  iconSize?: number
  typeStyle?: TextStyle
}

const IconText: React.FC<Props> = ({
  icon,
  text,
  iconSize = 16,
  typeStyle,
  style,
}) => {
  const { colors } = useTheme() as Theme
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}
    >
      <Icon
        name={icon}
        size={iconSize}
        color={typeStyle?.color || colors.text}
        style={{ marginRight: 4 }}
      />
      <Text style={typeStyle}>{text}</Text>
    </View>
  )
}

export default IconText
