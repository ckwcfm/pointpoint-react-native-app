import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerToggleButton from '../../screens/DrawerToggleButton'
import AdminScreen from '../../screens/AdminScreen'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { DrawerStackParamList } from '../../types'
const AdminStack = createNativeStackNavigator()

type AdminStackScreenProps = DrawerScreenProps<DrawerStackParamList, 'admin'>
const AdminStackScreen: React.FC<AdminStackScreenProps> = ({ navigation }) => {
  return (
    <AdminStack.Navigator>
      <AdminStack.Screen
        name='AdminScreen'
        component={AdminScreen}
        options={{
          headerLeft: () => (
            <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
    </AdminStack.Navigator>
  )
}

export default AdminStackScreen
