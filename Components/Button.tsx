import { useTheme } from '@react-navigation/native'
import { TouchableOpacityProps, View, ViewProps } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable'

const Button: React.FC<TouchableOpacityProps & GenericTouchableProps> = (
  props
) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          backgroundColor: colors.primary,
          padding: 8,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        },
        props.style,
      ]}
    >
      {props.children}
    </TouchableOpacity>
  )
}

export default Button
