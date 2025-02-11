

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Authentication from './src/Authentication';
import AppProvider from './src/Provider';

AppRegistry.registerComponent(appName, () => AppProvider);
