import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../types'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../screens/authentication/Login'
import RegisterScreen from '../../screens/authentication/Register'

const Stack = createNativeStackNavigator<AuthStackParamList>()
const AuthenticationStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthenticationStackScreen
