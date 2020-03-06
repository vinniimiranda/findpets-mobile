import React, {useState, useEffect, useRef} from 'react';
import {useField} from '@unform/core';

import {Container, Label, TextInput} from './styles';
import {Animated, Easing} from 'react-native';

export default function Input({name, label, ...rest}) {
  const inputRef = useRef(null);
  const {fieldName, registerField, defaultValue = '', error} = useField(name);

  const [active, setActive] = useState(false);
  const [value, setValue] = useState(null);
  const labelPosition = new Animated.Value(25);
  function onFocusHandler() {
    if (!value) {
      setActive(true);
    }
  }
  function onBlurHandler() {
    if (!value) {
      setActive(false);
    }
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
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
  }, [fieldName, registerField]);

  useEffect(() => {
    if (active) {
      Animated.timing(labelPosition, {
        toValue: 10,
        duration: 200,
        easing: Easing.linear,
      }).start();
    }
    if (!active) {
      Animated.timing(labelPosition, {
        toValue: 25,
        duration: 200,
        easing: Easing.linear,
      }).start();
    }
  }, [active]);

  return (
    <Container behavior="height" keyboardVerticalOffset={100} enabled>
      <Label
        style={{
          top: labelPosition,
          fontSize: labelPosition.interpolate({
            inputRange: [10, 25],
            outputRange: [12, 16],
          }),
          color: labelPosition.interpolate({
            inputRange: [0, 25],
            outputRange: ['#28aca4', '#999'],
          }),
        }}>
        {label}
      </Label>
      <TextInput
        value={value}
        onChangeText={setValue}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
}
