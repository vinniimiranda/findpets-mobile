import React from 'react';

import {Container, Form} from './styles';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function SignUp() {
  return (
    <Container>
      <Logo />
      <Form>
        <Input label="E-mail" />
        <Input label="Senha" />

        <Button text="Proximo" />
      </Form>
    </Container>
  );
}
