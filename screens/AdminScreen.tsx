import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from '../Context/UserProvider'

export default function AdminScreen() {
  const { colors } = useTheme()
  const functions = [{ name: 'create card' }, { name: 'sdfs' }]

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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title='logout'
        onPress={() => {
          logout?.()
        }}
      ></Button>
      <FlatList
        style={{ flex: 1, alignSelf: 'stretch' }}
        data={functions}
        renderItem={({ item }) => <Item title={item.name} />}
        ItemSeparatorComponent={ItemDivider}
      />
    </View>
  )
}
