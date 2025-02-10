import { Button, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { globalColors } from './constants/globalStyles';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Tab from './navigations/Tab';


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
