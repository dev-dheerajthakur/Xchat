import { Button, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useEffect } from 'react'
import { globalColors } from './constants/globalStyles';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Tab from './navigations/Tab';
import { useAppSelector } from './store/hooks';
import { io } from 'socket.io-client';


export type TabNavigatorParamList = {
  Chats: undefined;
  Calls: undefined;
  Community: undefined;
  updates: undefined;
};

// Define types for the main Stack navigator
export type RootStackParamList = {
  Tab: NavigatorScreenParams<TabNavigatorParamList>; // Nested Tab Navigator
  Profile: undefined;
  Settings: undefined;
};

export type rootNavigation<T extends keyof RootStackParamList> = NativeStackNavigationProp<RootStackParamList, T>

const Stack = createNativeStackNavigator<RootStackParamList>();
// const Stack = createStackNavigator();



export default function App() {


  useEffect(() => {
    // Create a connection to the Socket.IO server
    const socket = io('http://192.168.85.6:5000', {
      transports: ['websocket'],  // Important for React Native
    });
    // Log the socket object
    console.log(socket);

    // Listen for any events from the server
    socket.on('connect', () => {
      console.log('Connected to the server!');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from the server!');
    });

    return () => {
      // Cleanup the socket connection when the component unmounts
      socket.disconnect();
    };
  }, []);


  const isDarkMode = useColorScheme() === 'dark' ? 'dark' : 'light';
  
  const styles = StyleSheet.create({
    text: {
      color: globalColors[isDarkMode].bg1
    },
    container: {
      backgroundColor: globalColors[isDarkMode].bg10,
      flex: 1
    },
    header: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: globalColors[isDarkMode].bg9
    },
    headerText: {
      color: globalColors[isDarkMode].bg1,
      fontSize: 30,
      fontWeight: 800
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={globalColors[isDarkMode].bg9} />
      <View style={styles.header}>
        <Text style={styles.headerText}>X chat</Text>
      </View>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: globalColors[isDarkMode].bg10,
          }
        }}>
          <Stack.Screen name='Tab' component={Tab} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
