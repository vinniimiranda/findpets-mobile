import React, {useRef} from 'react';

import {Container, Form, DataArea} from './styles';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {ScrollView} from 'react-native';

export default function SignUp() {
  const formRef = useRef(null);

  function handleSubmit(data) {
    alert(JSON.stringify(data));
    // { email: 'test@example.com', password: '123456' }
  }
  const defaultData = {
    name: 'Flavio',
    email: 'flavio@gmail.com',
    password: '12345',
  };
  return (
    <ScrollView>
      <Container>
        <Logo />
        <DataArea>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input label="NOME" name="name" type="text" />
            <Input
              label="E-MAIL"
              name="email"
              type="email"
              keyboardType="email-address"
            />
            <Input label="SENHA" name="password" secureTextEntry={true} />
          </Form>
        </DataArea>
        <Button text="Proximo" onPress={() => formRef.current.submitForm()} />
      </Container>
    </ScrollView>
  );
}
