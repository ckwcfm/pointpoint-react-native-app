import { DrawerScreenProps } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabStackPrarmList, SettingsTabStackPraramList } from '../../types'
import DrawerToggleButton from '../../screens/DrawerToggleButton'
import SettingScreen from '../../screens/Settings'
const Stack = createNativeStackNavigator<SettingsTabStackPraramList>()
type Props = DrawerScreenProps<TabStackPrarmList, 'SettingTab'>

const SettingTabStackScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Settings'
        component={SettingScreen}
        options={{
          headerLeft: () => (
            <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default SettingTabStackScreen
