import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { rootNavigation, RootStackParamList } from '../../App'
import { RouteProp } from '@react-navigation/native'

type oneToOneChat = {
    navigation: rootNavigation<'OneToOneChat'>,
    route: RouteProp<RootStackParamList, 'OneToOneChat'>
}

export default function OneToOneChat({route}: oneToOneChat) {

  const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        color: '#FFFFFF'
    }
  })

  return (
    <View>
        <Text style={styles.header}>{route.params.user}</Text>
      <Text>OneToOneChat</Text>
    </View>
  )
}