import { Button } from 'react-native'
type DrawerToggleButtonProps = {
  onPress: () => void
}
import Ionicons from '@expo/vector-icons/Ionicons'
import { useTheme } from '@react-navigation/native'

const DrawerToggleButton: React.FC<DrawerToggleButtonProps> = ({ onPress }) => {
  const { colors } = useTheme()
  return (
    <Ionicons
      name='md-menu-outline'
      size={32}
      color={colors.text}
      onPress={onPress}
    />
  )
}

export default DrawerToggleButton
