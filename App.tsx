// import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AdminStackScreen from './stacks/AdminStackScreen'
import ClientStackScreen from './stacks/ClientStackScreen'
import { useColorScheme } from 'react-native'
import { Light, Dark } from './Theme'
import { useContext } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import AuthenticationStackScreen from './stacks/Authentication'
import AuthProvider, { AuthContext } from './Context/UserProvider'
const Drawer = createDrawerNavigator()

const Main = () => {
  const { user } = useContext(AuthContext)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {user ? (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name='Admin' component={AdminStackScreen} />
          <Drawer.Screen name='Client' component={ClientStackScreen} />
        </Drawer.Navigator>
      ) : (
        <AuthenticationStackScreen />
      )}
    </SafeAreaView>
  )
}

export default function App() {
  const scheme = useColorScheme()
  const theme = () => {
    // return Dark
    return scheme === 'dark' ? Dark : Light
  }

  return (
    <NavigationContainer theme={theme()}>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </NavigationContainer>
  )
}
