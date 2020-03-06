import React from 'react';

import {Container, Image} from './styles';

import logo from '../../assets/images/Logo.png';

export default function Logo() {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
}
