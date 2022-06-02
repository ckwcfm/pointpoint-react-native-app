// import 'react-native-gesture-handler'

import { NavigationContainer, useTheme } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer'
import AdminStackScreen from './stacks/AdminStackScreen'
import ClientStackScreen from './stacks/ClientStackScreen'
import {
  useColorScheme,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Text from './Components/Text'
import { Light, Dark, Theme } from './Theme'
import { useContext } from 'react'
import AuthenticationStackScreen from './stacks/Authentication'
import AuthProvider, { AuthContext } from './Context/UserProvider'
import APIProvider from './Context/ApiProvider'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
const Drawer = createDrawerNavigator()

import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import Button from './Components/Button'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import IconText from './Components/IconText'
import Style from './Style'

const DrawerList: React.FC<DrawerContentComponentProps> = (props) => {
  const { logout } = useContext(AuthContext)
  const { colors } = useTheme() as Theme
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom']}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: colors.primary }}
        {...props}
      >
        <View
          style={{
            height: 128,
            padding: 16,
            backgroundColor: colors.primary,
            justifyContent: 'flex-end',
          }}
        >
          <Text style={Style.title}>Header</Text>
        </View>
        <View style={{ backgroundColor: colors.background }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <Button
        style={{ margin: 16, backgroundColor: colors.red }}
        onPress={() => {
          logout?.()
        }}
      >
        <IconText
          text='Logout'
          icon='logout'
          typeStyle={{ color: colors.background }}
        />
      </Button>
    </SafeAreaView>
  )
}

const Main: React.FC = () => {
  const { user } = useContext(AuthContext)
  const { colors } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {user ? (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerList {...props} />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name='Admin' component={AdminStackScreen} />
          <Drawer.Screen name='Client' component={ClientStackScreen} />
        </Drawer.Navigator>
      ) : (
        <AuthenticationStackScreen />
      )}
    </View>
  )
}

export default function App() {
  const scheme = useColorScheme()
  const theme = () => {
    console.log(scheme)
    return scheme === 'dark' ? Dark : Light
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme()}>
        <AuthProvider>
          <APIProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Main />
            </TouchableWithoutFeedback>
          </APIProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
