import { useTheme } from '@react-navigation/native'
import { useState } from 'react'
import { View, TextInput, TextInputProps, StyleSheet } from 'react-native'

const TextField: React.FC<TextInputProps> = (props) => {
  const [focus, setFocus] = useState(false)
  const { colors } = useTheme()
  return (
    <View style={props.style}>
      <TextInput
        {...props}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
        style={{
          borderColor: focus ? colors.primary : colors.border,
          backgroundColor: focus ? colors.card : colors.background,
          borderWidth: 1,
          borderRadius: 8,
          height: 40,
          paddingHorizontal: 8,
          fontSize: 18,
        }}
      ></TextInput>
    </View>
  )
}

const style = StyleSheet.create({
  input: {},
})

export default TextField
