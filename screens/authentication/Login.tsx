import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../types'
import { View, Text, Button } from 'react-native'
import { useTheme } from '@react-navigation/native'
import TextField from '../../Components/TextField'
import { useContext, useState } from 'react'
import { AuthContext } from '../../Context/UserProvider'

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>
const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme()
  const [username, setUsername] = useState('')
  const { login } = useContext(AuthContext)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 16,
      }}
    >
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
        style={{ marginVertical: 16 }}
        placeholder='usename'
        value={username}
        onChangeText={setUsername}
      />
      <TextField placeholder='password' secureTextEntry />

      <Button
        title='Login'
        onPress={() => {
          login?.()
        }}
      />

      <Button
        title='register'
        onPress={() => {
          navigation.push('Register')
        }}
      />
    </View>
  )
}

export default LoginScreen
