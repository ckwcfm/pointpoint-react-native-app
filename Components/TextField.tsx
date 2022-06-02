import { useTheme } from '@react-navigation/native'
import { useState } from 'react'
import { View, TextInput, TextInputProps, StyleSheet } from 'react-native'
import { Theme } from '../Theme'
import Text from './Text'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
interface Props extends TextInputProps {
  title?: string
  titleIcon?: keyof typeof Icon.glyphMap
}

const TextField: React.FC<Props> = (props) => {
  const [focus, setFocus] = useState(false)
  const { colors } = useTheme() as Theme
  const { title, titleIcon } = props
  const flexDirection =
    StyleSheet.flatten(props.style || {}).flexDirection || 'column'
  return (
    <View style={[props.style]}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
          },
          {
            marginBottom: flexDirection === 'row' ? 0 : 4,
            marginRight: flexDirection === 'row' ? 4 : 0,
          },
        ]}
      >
        {titleIcon && (
          <Icon
            style={{ marginRight: 4 }}
            name={titleIcon}
            size={24}
            color={colors.text}
          />
        )}
        {title && (
          <Text style={[{ fontSize: 18, fontWeight: '600' }]}>{title}</Text>
        )}
      </View>
      <TextInput
        {...props}
        clearButtonMode='always'
        placeholderTextColor={colors.pleceHolderText}
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
        style={{
          borderColor: focus ? colors.primary : colors.border,
          backgroundColor: props.value
            ? colors.card
            : colors.textFieldBackground,
          borderWidth: 1,
          borderRadius: 8,
          height: 40,
          paddingHorizontal: 8,
          fontSize: 18,
          color: colors.text,
        }}
      ></TextInput>
    </View>
  )
}

const style = StyleSheet.create({
  input: {},
})

export default TextField
