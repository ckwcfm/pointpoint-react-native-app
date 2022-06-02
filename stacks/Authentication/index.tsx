import { AuthStackParamList } from '../../types/stacks'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../../screens/authentication/Login'
import RegisterScreen from '../../screens/authentication/Register'
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from 'react-native'

const Stack = createNativeStackNavigator<AuthStackParamList>()
const AuthenticationStackScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default AuthenticationStackScreen
