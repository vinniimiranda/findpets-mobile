import React from 'react';
import {View} from 'react-native';

import {Container, Text} from './styles';

export default function Button({text, ...rest}) {
  return (
    <Container {...rest}>
      <Text>{text}</Text>
    </Container>
  );
}
