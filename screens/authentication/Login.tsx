import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../types/stacks'
import {
  View,
  Text,
  Keyboard,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
} from 'react-native'
import { useTheme } from '@react-navigation/native'
import TextField from '../../Components/TextField'
import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/UserProvider'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import Button from '../../Components/Button'
import { Theme } from '../../Theme'

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme() as Theme
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const { login } = useContext(AuthContext)

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
          padding: 16,
          justifyContent: 'space-between',
        }}
      >
        <View />
        <View style={{}}>
          <Text
            style={{
              textAlign: 'center',
              color: colors.text,
              fontSize: 24,
              fontWeight: '700',
            }}
          >
            Login
          </Text>
          <TextField
            title='username'
            style={{ marginVertical: 16 }}
            placeholder='usename'
            value={username}
            onChangeText={setUsername}
          />
          <TextField
            style={{ marginBottom: 16 }}
            title='password'
            placeholder='password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {!!error && (
            <Text style={{ marginVertical: 8, color: 'red' }}>{error}</Text>
          )}
          {isLoggingIn && <ActivityIndicator />}
          <Icon.Button
            name='lock'
            style={{ justifyContent: 'center' }}
            onPress={async () => {
              try {
                console.log('login')
                setError('')
                setIsLoggingIn(true)
                await login?.(username, password)
              } catch (error) {
                setError(error as string)
                setIsLoggingIn(false)
              }
            }}
          >
            Login
          </Icon.Button>
        </View>
        <Icon.Button
          style={{ justifyContent: 'center', color: colors.primary }}
          name='react'
          onPress={() => {
            navigation.push('Register')
          }}
        >
          registoer
        </Icon.Button>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen
