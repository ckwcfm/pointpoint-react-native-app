import { useTheme } from '@react-navigation/native'
import { View, ViewProps } from 'react-native'
import { Theme } from '../Theme'

const Card: React.FC<ViewProps> = ({ children, style }) => {
  const { colors } = useTheme() as Theme
  return (
    <View
      style={[
        {
          backgroundColor: colors.card,
          borderRadius: 8,
          margin: 8,
          padding: 16,
          shadowOffset: { width: 0, height: 2 },
          shadowColor: colors.shadow,
          shadowOpacity: 0.2,
          shadowRadius: 3.84,
          elevation: 3,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

export default Card
