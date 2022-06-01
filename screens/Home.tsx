import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { View, Text, Button } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { HomeTabStackParamList } from '../types'

type Props = NativeStackScreenProps<HomeTabStackParamList, 'Home1'>

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Ssdfscreen</Text>
      <Ionicons name='md-menu' size={32} color='green' />
      <Button title='Go to Home2' onPress={() => navigation.push('Home2')} />
    </View>
  )
}

export default HomeScreen
