import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { KeyboardAvoidingView, Platform, View, ScrollView } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { useHeaderHeight } from '@react-navigation/elements'
import TextField from '../../Components/TextField'
import { AdminStackParamList } from '../../types/stacks'
import { useEffect, useState } from 'react'
import { CompanyStampCard } from '../../types/api'
import Button from '../../Components/Button'
import Text from '../../Components/Text'
import { useTheme } from '@react-navigation/native'
import { Theme } from '../../Theme'
import DateTimePicker from '@react-native-community/datetimepicker'
import Style from '../../Style'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { format } from 'date-fns'

type ScreenProps = NativeStackScreenProps<
  AdminStackParamList,
  'AdminCreateCompanyCardScreen'
>

const AdminCreateCompanyCardScreen: React.FC<ScreenProps> = ({
  navigation,
}) => {
  const { colors, dark } = useTheme() as Theme

  const headerHeight = useHeaderHeight()
  type formDataType = {
    name: string
    description: string
    points: number
    expriyData: Date
  }
  const [formData, setFormData] = useState<formDataType>({
    name: '',
    description: '',
    points: 10,
    expriyData: new Date(),
  })
  const [showDatePicker, setShowDatePicker] = useState(false)

  useEffect(() => {}, [])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={headerHeight}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <View
          style={{
            justifyContent: 'flex-end',
            backgroundColor: colors.primary,
            height: 150,
            padding: 16,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              marginBottom: 4,
            }}
          >
            <Icon
              style={{ marginRight: 4 }}
              color={colors.text}
              name='wallet-giftcard'
              size={32}
            />
            <Text style={{ ...Style.title }}>新增集點卡</Text>
          </View>
          <Text style={{ fontSize: 12, fontWeight: '500' }}>
            你可以在此新增集點卡
          </Text>
          <View style={{ height: 32 }} />
        </View>
        <View
          style={{
            padding: 16,
            flex: 1,
            borderTopStartRadius: 16,
            borderTopEndRadius: 16,
            backgroundColor: colors.background,
            transform: [{ translateY: -36 }],
          }}
        >
          <TextField
            style={{
              marginBottom: 16,
            }}
            title='name'
            titleIcon='menu'
            placeholder='name'
            value={formData.name}
            onChangeText={(text) => {
              setFormData({ ...formData, name: text })
            }}
          ></TextField>
          <TextField
            style={{ marginBottom: 16 }}
            title='description'
            placeholder='name'
            titleIcon='developer-board'
            value={formData.description}
            onChangeText={(text) => {
              setFormData({ ...formData, description: text })
            }}
          ></TextField>
          <View
            style={{
              marginTop: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flex: 2,
            }}
          >
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 16,
                marginRight: 8,
                borderRadius: 8,
                padding: 8,
                flex: 1,
                backgroundColor: colors.textFieldBackground,
              }}
            >
              <Text
                style={{ marginBottom: 8, fontSize: 16, fontWeight: '600' }}
              >
                Points
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button
                  style={{ padding: 8 }}
                  onPress={() => {
                    setFormData({
                      ...formData,
                      points: Math.max(formData.points - 1, 0),
                    })
                  }}
                >
                  <Icon color='white' name='minus' />
                </Button>

                <Text
                  style={{
                    marginHorizontal: 8,
                    fontSize: 16,
                    fontWeight: '600',
                    width: 24,
                    textAlign: 'center',
                  }}
                >
                  {formData.points}
                </Text>

                <Button
                  style={{ padding: 8 }}
                  onPress={() => {
                    setFormData({ ...formData, points: formData.points + 1 })
                  }}
                >
                  <Icon color='white' name='plus' />
                </Button>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 16,
                flex: 1,
                padding: 8,
                backgroundColor: colors.textFieldBackground,
                borderRadius: 8,
                marginLeft: 8,
              }}
            >
              <Text
                style={{ marginBottom: 8, fontSize: 16, fontWeight: '600' }}
              >
                Expriy Date
              </Text>
              <Button
                onPress={() => {
                  setShowDatePicker(true)
                }}
              >
                <Text style={{ color: 'white', fontWeight: '700' }}>
                  {format(new Date(formData.expriyData), 'yyyy-MM-dd')}
                </Text>
              </Button>
            </View>
          </View>

          <Text style={{ marginTop: 32 }}>{JSON.stringify(formData)}</Text>
          <Button>
            <Text>button</Text>
          </Button>
        </View>

        <DateTimePickerModal
          isVisible={showDatePicker}
          mode='date'
          display='inline'
          isDarkModeEnabled={dark}
          minimumDate={new Date()}
          onConfirm={(date) => {
            setFormData({ ...formData, expriyData: date })
            setShowDatePicker(false)
          }}
          onCancel={() => {
            setShowDatePicker(false)
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AdminCreateCompanyCardScreen
