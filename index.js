

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Authentication from './src/Authentication';

// // const MMKV = new MMKVStorage.Loader().initialize
// const storage = new MMKVLoader().initialize()

// const [token, setToken] = useMMKVStorage('token', storage, 'hululu')

// console.log(token)

AppRegistry.registerComponent(appName, () => Authentication);
