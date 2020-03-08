import React from 'react';
import {StatusBar} from 'react-native';
import App from './src/App';

const Index = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#28ACA4" />
      <App />
    </>
  );
};

export default Index;
