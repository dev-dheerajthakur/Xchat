import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';
import {globalColors} from '../constants/globalStyles';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigatorParamList} from '../App';
import Chats from '../screens/Chats';
import Calls from '../screens/Calls';
import Updates from '../screens/Updates';
import Communities from '../screens/Communities';

const Tabs = createBottomTabNavigator<TabNavigatorParamList>();

export default function Tab() {
  const isDarkMode = useColorScheme() === 'dark' ? 'dark' : 'light';

  const styles = StyleSheet.create({
      header: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: globalColors[isDarkMode].bg9,
      },
      headerText: {
        color: globalColors[isDarkMode].bg1,
        fontSize: 30,
        fontWeight: 800,
      },
  })

  return (
    <Tabs.Navigator
      backBehavior="history"
      screenOptions={{
        header: ()=>(
          <View style={styles.header}>
            <Text style={styles.headerText}>X chat</Text>
          </View>
        ),
        tabBarStyle: {
          backgroundColor: globalColors[isDarkMode].bg9,
          borderColor: globalColors[isDarkMode].bg6,
        },
        tabBarActiveTintColor: globalColors[isDarkMode].bg1,
        tabBarInactiveTintColor: globalColors[isDarkMode].bg4,
        sceneStyle: {
          backgroundColor: globalColors[isDarkMode].bg10,
        },
      }}>
      <Tabs.Screen name="Chats" component={Chats} />
      <Tabs.Screen name="Calls" component={Calls} />
      <Tabs.Screen name="updates" component={Updates} />
      <Tabs.Screen name="Community" component={Communities} />
    </Tabs.Navigator>
  );
}
