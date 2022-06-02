import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../types/stacks'
import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>

const RegisterScreen: React.FC<Props> = () => {
  const { colors } = useTheme()
  return (
    <View>
      <Text style={{ color: colors.text }}>Register</Text>
    </View>
  )
}

export default RegisterScreen
