import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {globalColors} from './constants/globalStyles';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Tab from './navigations/Tab';
import {io} from 'socket.io-client';

import {SOCKET_URL} from '@env';
import { useAppSelector } from './store/hooks';
import OneToOneChat from './screens/stacks/OneToOneChat';

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
  OneToOneChat: {user: string};
};

export type rootNavigation<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();
// const Stack = createStackNavigator();

const socket = io(SOCKET_URL, {
  transports: ['websocket'], // Important for React Native
});

export default function App() {

  const token = useAppSelector( state => state.mmkvStorage.token )
  
  useEffect(() => {
    // Listen for any events from the server
    socket.on('connect', () => {
      socket.emit('helo', token)
    });

    return () => {
      // Cleanup the socket connection when the component unmounts
      socket.disconnect();
    };
  }, []);

  const isDarkMode = useColorScheme() === 'dark' ? 'dark' : 'light';

  const styles = StyleSheet.create({
    text: {
      color: globalColors[isDarkMode].bg1,
    },
    container: {
      backgroundColor: globalColors[isDarkMode].bg10,
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={globalColors[isDarkMode].bg9} />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: globalColors[isDarkMode].bg10,
            },
          }}>
          <Stack.Screen name="Tab" component={Tab} />
          <Stack.Screen name='OneToOneChat' component={OneToOneChat} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export { socket }