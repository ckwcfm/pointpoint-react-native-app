import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from '../Context/UserProvider'
import { APIContext } from '../Context/ApiProvider'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AdminScreen() {
  const { colors } = useTheme()
  const functions = [
    { name: 'create card' },
    { name: 'sdfdfss' },
    { name: 'credzsfate card' },
    { name: 'sdfsdfs' },
    { name: 'cresdfate csard' },
    { name: 'sdcfs' },
    { name: 'cresdfate dcard' },
    { name: 'sdcfs' },
    { name: 'sdfszdfs' },
    { name: 'cresdfate csard' },
    { name: 'sdcfrcs' },
    { name: 'crejksdfate dcard' },
    { name: 'sdckfs' },
  ]

  type ItemProps = {
    title: string
  }
  const Item: React.FC<ItemProps> = ({ title }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.card,
        padding: 8,
        height: 64,
      }}
      onPress={() => {
        console.log(`pressed ${title}`)
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontSize: 18,
          fontWeight: '600',
        }}
      >
        {title}
      </Text>
      <Icon name='chevron-right' size={28} color={colors.border} />
    </TouchableOpacity>
  )

  const ItemDivider = () => (
    <View
      style={{ height: 0.5, width: '100%', backgroundColor: colors.border }}
    />
  )

  const { logout } = React.useContext(AuthContext)
  const http = React.useContext(APIContext)
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      edges={['bottom']}
    >
      <Button
        title='logout'
        onPress={() => {
          logout?.()
        }}
      ></Button>

      <Button
        title='test api'
        onPress={async () => {
          console.log('test api')
          const { data } = await http.get(
            'companies-stampcards/6278773f6dea07cb28ef72f9/take'
          )
          console.log({ data })
        }}
      ></Button>

      <FlatList
        style={{ flex: 1, alignSelf: 'stretch' }}
        data={functions}
        renderItem={({ item }) => <Item title={item.name} />}
        ItemSeparatorComponent={ItemDivider}
      />
    </SafeAreaView>
  )
}
