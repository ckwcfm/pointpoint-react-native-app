import { DrawerStackParamList } from '../../types/stacks'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeTabStackScreen from './HomeTabStackScreen'
import SettingTabStackScreen from './SettingTabStackScreen'
import Ionicons from '@expo/vector-icons/Ionicons'

type ClientStackScreenProps = DrawerScreenProps<DrawerStackParamList, 'client'>

const Tab = createBottomTabNavigator()

const ClientStackScreen: React.FC<ClientStackScreenProps> = ({
  navigation,
}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='HomeTab'
        component={HomeTabStackScreen}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name='md-home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='SettingTab'
        component={SettingTabStackScreen}
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name='md-menu' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
export default ClientStackScreen
