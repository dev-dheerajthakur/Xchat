import { Button, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { globalColors } from '../constants/globalStyles';
import { rootNavigation, socket } from '../App';
import { useNavigation } from '@react-navigation/native';

export default function Chats() {
  const isDarkMode = useColorScheme() === 'dark' ? 'dark' : 'light';
  const navigation = useNavigation<rootNavigation<'Tab'>>()

  function click() {
    console.log(socket)
    socket.emit('msg', "hi there me");
  }
  socket.on('smsg', (args)=>{
    console.log(args)
  })

  function navigate() {
    navigation.navigate('OneToOneChat', {user: '9910756792'})
  }
  

  const styles = StyleSheet.create({
    text: {
      color: globalColors[isDarkMode].bg1
    }
  });

  return (
    <View>
      <Text style={[styles.text]}>Chats</Text>
      <Button title='click' onPress={click}></Button>
      <Button title='One to one chat' onPress={navigate} />
    </View>
  )
}
