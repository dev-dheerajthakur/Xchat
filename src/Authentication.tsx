import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { MMKVLoader, useMMKVStorage }  from "react-native-mmkv-storage";
import App from './App';

const storage = new MMKVLoader().initialize();

export default function Authentication() {

    const [token, setToken] = useMMKVStorage<string>('token', storage);

    return token === 'Khuta' ? <App /> : (
        <View>
            <Text>Authentication</Text>
            <Button title='login' onPress={()=>{
                setToken('Khuta')
            }} />
        </View>
    )
}