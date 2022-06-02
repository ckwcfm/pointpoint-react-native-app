import { useTheme } from '@react-navigation/native'
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native'
import { Theme } from '../Theme'
import { StampCardWithCardInfo } from '../types/api'
import StampCardHole from './StampCardHole'
import QRCode from 'react-native-qrcode-svg'
import { useState } from 'react'
type ItemProps = {
  item: StampCardWithCardInfo
}

const Card: React.FC<ItemProps> = ({ item }) => {
  const { colors } = useTheme() as Theme
  const qrcodeBackgroundColor = 'white'
  const qrcodeSize = 64

  return (
    <View
      style={{
        backgroundColor: colors.card,
        borderRadius: 8,
        margin: 8,
        padding: 16,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: colors.text,
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 3,
      }}
    >
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <View
          style={{
            padding: 8,
            backgroundColor: qrcodeBackgroundColor,
            borderRadius: 8,
            width: qrcodeSize,
          }}
        >
          <QRCode
            size={qrcodeSize - 16}
            value={item.id}
            backgroundColor={qrcodeBackgroundColor}
          />
        </View>

        <View style={{ marginLeft: 8, flex: 1 }}>
          <Text
            style={{
              color: colors.text,
              textAlign: 'right',
              fontSize: 18,
              fontWeight: '700',
            }}
          >
            {item.companyStampCard.company.name}
          </Text>
          <Text
            style={{ color: colors.text, marginTop: 8, textAlign: 'right' }}
          >
            {item.companyStampCard.name}
          </Text>
          <Text
            style={{ color: colors.text, marginTop: 8, textAlign: 'right' }}
          >
            {item.points} / {item.companyStampCard.points}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Array.apply(0, Array(item.companyStampCard.points)).map((x, i) => {
          return (
            <StampCardHole
              style={{
                flexBasis: '20%',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 4,
              }}
              stamped={i < item.points}
              key={i}
            />
          )
        })}
      </View>
    </View>
  )
}

export default Card
