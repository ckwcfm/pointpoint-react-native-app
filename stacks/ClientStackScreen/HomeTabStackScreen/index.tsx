import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import HomeScreen from '../../../screens/Home'
import DrawerToggleButton from '../../../screens/DrawerToggleButton'
import { HomeTabStackParamList, TabStackPrarmList } from '../../../types'
import HomeScreen2 from '../../../screens/Home2'
const Stack = createNativeStackNavigator<HomeTabStackParamList>()

type Props = DrawerScreenProps<TabStackPrarmList, 'HomeTab'>

const HomeTabStackScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home1'
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
      <Stack.Screen name='Home2' component={HomeScreen2} />
    </Stack.Navigator>
  )
}

export default HomeTabStackScreen
