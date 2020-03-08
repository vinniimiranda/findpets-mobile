import * as React from 'react';
import {AppRegistry} from 'react-native';
import {DarkTheme, Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';

const theme = {
  ...DarkTheme,
  roundness: 0,
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#28aca4',
    accent: '#f1c40f',
    color: '#28aca4',
    text: '#999',
    background: 'transparent',
    backdrop: '#28aca4',
    placeholder: '#999',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
