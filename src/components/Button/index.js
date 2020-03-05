import React from 'react';
import {View} from 'react-native';

import {Container, Text} from './styles';

export default function Button({text}) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}
