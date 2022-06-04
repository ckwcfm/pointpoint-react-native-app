import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { useHeaderHeight } from '@react-navigation/elements'
import TextField from '../../Components/TextField'
import { AdminStackParamList } from '../../types/stacks'
import { useEffect, useState } from 'react'
import Button from '../../Components/Button'
import Text from '../../Components/Text'
import { useTheme } from '@react-navigation/native'
import { Theme } from '../../Theme'
import Style from '../../Style'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { format, isAfter } from 'date-fns'
import IconText from '../../Components/IconText'

type ScreenProps = NativeStackScreenProps<
  AdminStackParamList,
  'AdminCreateCompanyCardScreen'
>

type NumberIncrementDecrementButtonProps = {
  value: number
  onIncrement: () => void
  onDecrement: () => void
}
const NumberIncrementDecrementButton: React.FC<
  NumberIncrementDecrementButtonProps
> = ({ value, onIncrement, onDecrement }) => {
  return (
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
          onDecrement()
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
        {value}
      </Text>

      <Button
        style={{ padding: 8 }}
        onPress={() => {
          onIncrement()
        }}
      >
        <Icon color='white' name='plus' />
      </Button>
    </View>
  )
}

const AdminCreateCompanyCardScreen: React.FC<ScreenProps> = ({
  navigation,
}) => {
  const { colors, dark } = useTheme() as Theme
  const style = StyleSheet.create({
    blockContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 16,
      // marginHorizontal: 4,
      borderRadius: 8,
      padding: 8,
      // flex: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      flexGrow: 0,
      backgroundColor: colors.textFieldBackground,
    },
  })

  const headerHeight = useHeaderHeight()
  type formDataType = {
    name: string
    description: string
    points: number
    activationDate: Date
    expriyData: Date
    instructions: string[]
  }
  const [formData, setFormData] = useState<formDataType>({
    name: '',
    description: '',
    points: 10,
    activationDate: new Date(),
    expriyData: new Date(),
    instructions: [],
  })

  const [showExpiryDatePicker, setShowExpiryDatePicker] = useState(false)
  const [showActivationDatePicker, setShowActivationDatePicker] =
    useState(false)

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
            你可以在此新增集點卡模版，再用來發放集點卡給你的客戶。
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
            title='集點卡名稱'
            titleIcon='format-title'
            placeholder='集點卡名稱'
            value={formData.name}
            onChangeText={(text) => {
              setFormData({ ...formData, name: text })
            }}
          ></TextField>
          <TextField
            style={{ marginBottom: 16 }}
            title='集點卡簡介'
            placeholder='集點卡簡介'
            titleIcon='format-list-text'
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
              // flex: 3,
            }}
          >
            <View style={style.blockContainer}>
              <IconText
                style={{ marginBottom: 8 }}
                iconSize={24}
                icon='dots-grid'
                text='總點數'
                typeStyle={{ fontSize: 16, fontWeight: '600' }}
              ></IconText>
              <NumberIncrementDecrementButton
                value={formData.points}
                onIncrement={() => {
                  setFormData({ ...formData, points: formData.points + 1 })
                }}
                onDecrement={() => {
                  setFormData({
                    ...formData,
                    points: Math.max(formData.points - 1, 0),
                  })
                }}
              />
            </View>
            <View style={style.blockContainer}>
              <IconText
                style={{ marginBottom: 8 }}
                iconSize={24}
                icon='calendar-today'
                text='啟動時間'
                typeStyle={{ fontSize: 16, fontWeight: '600' }}
              ></IconText>
              <Button
                onPress={() => {
                  setShowActivationDatePicker(true)
                }}
              >
                <Text style={{ color: 'white', fontWeight: '700' }}>
                  {format(new Date(formData.activationDate), 'yyyy-MM-dd')}
                </Text>
              </Button>
            </View>

            <View style={style.blockContainer}>
              <IconText
                style={{ marginBottom: 8 }}
                iconSize={24}
                icon='calendar'
                text='完結時間'
                typeStyle={{ fontSize: 16, fontWeight: '600' }}
              ></IconText>
              <Button
                style={[
                  isAfter(formData.activationDate, formData.expriyData) && {
                    backgroundColor: 'red',
                  },
                ]}
                onPress={() => {
                  setShowExpiryDatePicker(true)
                }}
              >
                <Text style={{ color: 'white', fontWeight: '700' }}>
                  {format(new Date(formData.expriyData), 'yyyy-MM-dd')}
                </Text>
              </Button>
            </View>
          </View>

          <View
            style={{
              backgroundColor: colors.textFieldBackground,
              padding: 16,
              borderRadius: 16,
            }}
          >
            <Button
              onPress={() => {
                const newInstruction = [...formData.instructions, '']
                setFormData({
                  ...formData,
                  instructions: newInstruction,
                })
              }}
            >
              <IconText
                typeStyle={{ color: 'white' }}
                icon='clipboard-list-outline'
                text='加入使用說明'
              ></IconText>
            </Button>
            {formData.instructions.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginVertical: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '600',
                      marginRight: 8,
                    }}
                  >
                    {index + 1}
                  </Text>
                  <TextField
                    style={{ flex: 1, marginRight: 8 }}
                    value={`${item}`}
                    onChangeText={(text) => {
                      formData.instructions[index] = text
                      setFormData({
                        ...formData,
                      })
                    }}
                  />
                  <Button
                    style={{ flex: 1 }}
                    onPress={() => {
                      console.log('index : ', index, {
                        ins: formData.instructions,
                      })

                      const instructions = formData.instructions
                      instructions.splice(index, 1)
                      console.log(instructions)
                      setFormData({
                        ...formData,
                        instructions,
                      })
                    }}
                  >
                    <Text>remove</Text>
                  </Button>
                </View>
              )
            })}
          </View>
          <Text style={{ marginTop: 32 }}>{JSON.stringify(formData)}</Text>
          <Button>
            <Text>button</Text>
          </Button>
        </View>

        <DateTimePickerModal
          isVisible={showExpiryDatePicker}
          mode='date'
          display='inline'
          isDarkModeEnabled={dark}
          confirmTextIOS='確定'
          cancelTextIOS='取消'
          minimumDate={new Date()}
          onConfirm={(date) => {
            setFormData({ ...formData, expriyData: date })
            setShowExpiryDatePicker(false)
          }}
          onCancel={() => {
            setShowExpiryDatePicker(false)
          }}
        />

        <DateTimePickerModal
          isVisible={showActivationDatePicker}
          mode='date'
          display='inline'
          isDarkModeEnabled={dark}
          confirmTextIOS='確定'
          cancelTextIOS='取消'
          minimumDate={new Date()}
          onConfirm={(date) => {
            setFormData({ ...formData, activationDate: date })
            setShowActivationDatePicker(false)
          }}
          onCancel={() => {
            setShowActivationDatePicker(false)
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AdminCreateCompanyCardScreen
