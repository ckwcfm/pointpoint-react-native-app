import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View, ViewProps, Text } from 'react-native'
import { Theme } from '../Theme'

interface Props extends ViewProps {
  stamped: boolean
}
const StampCardHole: React.FC<Props> = ({ style, stamped }) => {
  const { colors } = useTheme() as Theme
  return (
    <View style={style}>
      <View
        style={{
          backgroundColor: colors.hole,
          borderRadius: 32,
          height: 64,
          width: 64,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {stamped && (
          <View
            style={{
              backgroundColor: 'red',
              opacity: 0.5,
              borderRadius: 32,
              height: 64,
              width: 64,
            }}
          ></View>
        )}
      </View>
    </View>
  )
}

export default StampCardHole
