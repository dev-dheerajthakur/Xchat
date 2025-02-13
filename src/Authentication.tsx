import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useMMKVStorage }  from "react-native-mmkv-storage";
import App from './App';

import { MMKVLoader } from "react-native-mmkv-storage";
import { useAppDispatch } from './store/hooks';
import { updateToken } from './store/states/mmkvStorageSlice';


export default function Authentication() {
    const dispatch = useAppDispatch();
    const storage = new MMKVLoader().initialize();

    const [token, setToken] = useMMKVStorage<string>('token', storage);
    dispatch(updateToken(token))

    return token === '8235681352' ? <App /> : (
            <View>
                <Text>Authentication</Text>
                <Button title='login' onPress={()=>{
                    setToken('8235681352')
                }} />
            </View>
    )
}