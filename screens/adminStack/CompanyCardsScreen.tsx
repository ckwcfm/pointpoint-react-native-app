import { FlatList, View } from 'react-native'
import Text from '../../Components/Text'
import { AdminStackParamList } from '../../types/stacks'
import { Company, CompanyStampCard, Paginate } from '../../types/api'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useContext, useEffect, useState } from 'react'
import { APIContext } from '../../Context/ApiProvider'
import Style from '../../Style'
import { useTheme } from '@react-navigation/native'
import { Theme } from '../../Theme'
import Card from '../../Components/Card'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { format } from 'date-fns'
import Chip from '../../Components/Chip'
import IconText from '../../Components/IconText'
type ScreenProps = NativeStackScreenProps<
  AdminStackParamList,
  'AdminCompanyCardsScreen'
>

const CompanyCardsScreen: React.FC<ScreenProps> = ({ navigation, route }) => {
  const company = route.params.company
  const { colors } = useTheme() as Theme
  const API = useContext(APIContext)
  const [cards, setCards] = useState<CompanyStampCard<string>[]>([])

  const loadCopanyCards = async () => {
    try {
      const data = await API.companyServices.getCompanyStampcards(company.id)
      console.log({ data })
      setCards(data.docs)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadCopanyCards()
  }, [])

  const Item: React.FC<{ item: CompanyStampCard<string> }> = ({ item }) => {
    return (
      <Card>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={{ ...Style.title2 }}>{item.name}</Text>
          {item.enable ? (
            <Chip title='enable' icon='bookmark-check' color={colors.green} />
          ) : (
            <Chip
              title='disable'
              icon='bookmark-minus'
              color={colors.disable}
            />
          )}
        </View>
        <Text style={{ marginTop: 8 }}>{item.description}</Text>
        <IconText
          style={{ marginTop: 4 }}
          icon='calendar'
          text={`expiryDate: ${format(
            new Date(item.expiryDate),
            'yyyy-MM-dd'
          )}`}
        ></IconText>
        <IconText
          style={{ marginTop: 4 }}
          icon='alpha-p-circle-outline'
          text={item.points}
        ></IconText>
        <IconText
          style={{ marginTop: 4 }}
          icon='wallet-giftcard'
          text={`數量: ${item.quantity}`}
        ></IconText>
      </Card>
    )
  }

  const Header: React.FC = () => {
    return (
      <View style={{ marginHorizontal: 8 }}>
        <Text style={{ ...Style.title, textAlign: 'center', marginBottom: 8 }}>
          {company.name}
        </Text>
        <Icon.Button
          style={{ justifyContent: 'center' }}
          name='card-plus-outline'
          onPress={() => {
            navigation.push('AdminCreateCompanyCardScreen')
          }}
        >
          新增集點卡
        </Icon.Button>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 8 }}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item item={item} />}
        ListHeaderComponent={() => <Header />}
      />
    </View>
  )
}

export default CompanyCardsScreen
