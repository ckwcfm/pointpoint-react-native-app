import {
  View,
  Text,
  StyleSheet,
  TextPropTypes,
  ViewProps,
  TextProps,
  TextStyle,
  ColorValue,
} from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

interface ChipProps extends ViewProps {
  icon: keyof typeof Icon.glyphMap
  title: string
  iconSize?: number
  typeStyle?: TextStyle
  color?: ColorValue
}

const Chip: React.FC<ChipProps> = ({
  icon,
  title,
  iconSize = 16,
  typeStyle,
  color = 'blue',
  style,
}) => {
  return (
    <View
      style={[
        style,
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          paddingHorizontal: 4,
          borderRadius: 5000,
          borderColor: color,
          borderWidth: 1,
          backgroundColor: color,
        },
      ]}
    >
      <View
        style={{
          borderRadius: 1000,
          backgroundColor: 'white',
          padding: 2,
          marginRight: 4,
        }}
      >
        <Icon name={icon} size={iconSize} color={color} />
      </View>
      <Text style={[typeStyle, { color: 'white' }]}>{title}</Text>
    </View>
  )
}

export default Chip
