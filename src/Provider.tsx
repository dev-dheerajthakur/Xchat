import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store/store';
import Authentication from './Authentication';

export default function AppProvider() {
  return (
    <Provider store={store}>
        <Authentication />
    </Provider>
  )
}
