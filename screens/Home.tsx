import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { useContext, useEffect } from 'react'
import { View, FlatList, Animated } from 'react-native'
import { HomeTabStackParamList } from '../types/stacks'
import { useTheme } from '@react-navigation/native'
import { Theme } from '../Theme'
import { APIContext } from '../Context/ApiProvider'
import { Paginate, StampCardWithCardInfo } from '../types/api'
import Card from '../Components/StampCard'

type Props = NativeStackScreenProps<HomeTabStackParamList, 'Home1'>

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { colors } = useTheme() as Theme
  const API = useContext(APIContext)
  const [cards, setCards] = React.useState<StampCardWithCardInfo[]>([])

  const getStampcards = async () => {
    const data = await API.stampCardServices.getWithCardInfo()
    setCards(data.docs)
  }
  useEffect(() => {
    getStampcards()
  }, [])

  return (
    <Animated.View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          style={{ flex: 1, alignSelf: 'stretch' }}
          data={cards}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Animated.View>
  )
}

export default HomeScreen
