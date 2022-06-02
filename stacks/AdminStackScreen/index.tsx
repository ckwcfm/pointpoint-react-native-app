import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack'
import DrawerToggleButton from '../../screens/DrawerToggleButton'
import AdminScreen from '../../screens/AdminScreen'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { DrawerStackParamList } from '../../types/stacks'
import CompaniesScreen from '../../screens/adminStack/CompaniesScreen'
import CompanyCardsScreen from '../../screens/adminStack/CompanyCardsScreen'
import AdminCreateCompanyCardScreen from '../../screens/adminStack/CreateCompanyStampCardScreen'
const AdminStack = createNativeStackNavigator()

type AdminStackScreenProps = DrawerScreenProps<DrawerStackParamList, 'admin'>

const AdminStackScreen: React.FC<AdminStackScreenProps> = ({ navigation }) => {
  return (
    <AdminStack.Navigator>
      <AdminStack.Screen
        name='AdminCompaniesScreen'
        component={CompaniesScreen}
        options={{
          headerLeft: () => (
            <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
      <AdminStack.Screen
        name='AdminCompanyCardsScreen'
        component={CompanyCardsScreen}
      />
      <AdminStack.Screen
        name='AdminCreateCompanyCardScreen'
        component={AdminCreateCompanyCardScreen}
      />
    </AdminStack.Navigator>
  )
}

export default AdminStackScreen
