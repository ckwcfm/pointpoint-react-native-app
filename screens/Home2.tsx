import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { View, Text } from 'react-native'
import { HomeTabStackParamList } from '../types'
import Ionicons from '@expo/vector-icons/Ionicons'

type Props = NativeStackScreenProps<HomeTabStackParamList, 'Home2'>

const HomeScreen2: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home 2</Text>
      <Ionicons name='md-menu' size={32} color='green' />
    </View>
  )
}

export default HomeScreen2
