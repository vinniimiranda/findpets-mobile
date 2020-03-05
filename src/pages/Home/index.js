import React from 'react';
import {View} from 'react-native';

import {Container, Logo, Text} from './styles';
import logo from '../../assets/images/Logo.png';
import Button from '../../components/Button/index';

export default function Home() {
  return (
    <Container>
      <Logo source={logo} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>
          Ajude alguém que perdeu seu bichinho de estimação de forma rápida e
          fácil.
        </Text>
      </View>
      <View>
        <Button text="Cadastrar" />
        <Button text="Localizar pet" />
      </View>
    </Container>
  );
}
