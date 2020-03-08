import React, {useState, useEffect, useRef} from 'react';
import {useField} from '@unform/core';
import {TextInput, withTheme} from 'react-native-paper';

import {Container} from './styles';

function Input({name, label, ...rest}) {
  const inputRef = useRef(null);
  const {fieldName, registerField, defaultValue = '', error} = useField(name);
  const [text, setText] = useState('');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || text;
      },
      setValue(ref, value) {
        ref.setNativeProps({text: value});
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({text: ''});
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField, text]);

  return (
    <Container>
      <TextInput
        label={label}
        style={{fontWeight: 'bold'}}
        underlineColor="#28aca4"
        underlineColorAndroid="#28aca4"
        ref={inputRef}
        value={text}
        onChangeText={setText}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
}
export default withTheme(Input);
