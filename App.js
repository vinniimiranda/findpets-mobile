import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#28ACA4" />
      <SafeAreaView>
        <Text>Hello world</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
