import { Button } from 'react-native'
type DrawerToggleButtonProps = {
  onPress: () => void
}
import Ionicons from '@expo/vector-icons/Ionicons'

const DrawerToggleButton: React.FC<DrawerToggleButtonProps> = ({ onPress }) => {
  return (
    <Ionicons
      name='md-menu-outline'
      size={32}
      color={'red'}
      onPress={onPress}
    />
  )
}

export default DrawerToggleButton
