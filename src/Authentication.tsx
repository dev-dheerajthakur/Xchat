import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useMMKVStorage }  from "react-native-mmkv-storage";
import App from './App';
import { useAppSelector } from './store/hooks';


export default function Authentication() {

    const storage = useAppSelector( state => state.mmkvStorage )
    const [token, setToken] = useMMKVStorage<string>('token', storage);

    console.log(token)

    return token === 'Khuta' ? <App /> : (
            <View>
                <Text>Authentication</Text>
                <Button title='login' onPress={()=>{
                    setToken('Khuta')
                }} />
            </View>
    )
}