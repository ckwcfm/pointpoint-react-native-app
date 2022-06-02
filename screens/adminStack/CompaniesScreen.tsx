import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/UserProvider'
import { FlatList, View } from 'react-native'
import { GenericTouchableProps } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable'
import { AdminStackParamList } from '../../types/stacks'
import { APIContext } from '../../Context/ApiProvider'
import { Company } from '../../types/api'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '@react-navigation/native'
import { Theme } from '../../Theme'
import Text from '../../Components/Text'
import Card from '../../Components/Card'
type Props = NativeStackScreenProps<AdminStackParamList, 'AdminCompaniesScreen'>

import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import Style from '../../Style'

const CompaniesScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(AuthContext)
  const API = useContext(APIContext)
  const [companies, setCompanies] = useState<Company[]>([])
  const loadMyCompanies = async () => {
    try {
      if (!user) {
        return
      }
      const data = await API.companyServices.getUserCompanyies(user.id)
      console.log({ data })
      setCompanies(data.docs)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadMyCompanies()
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={companies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CompanyRow
            company={item}
            onPress={() => {
              navigation.push('AdminCompanyCardsScreen', { company: item })
            }}
          />
        )}
      />
    </View>
  )
}

interface RowProps extends GenericTouchableProps {
  company: Company
}
const CompanyRow: React.FC<RowProps> = ({ company, onPress }) => {
  const { colors } = useTheme() as Theme
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ ...Style.title2 }}>{company.name}</Text>
        <Icon name='chevron-right' size={24} color={colors.text}></Icon>
      </Card>
    </TouchableOpacity>
  )
}

export default CompaniesScreen
