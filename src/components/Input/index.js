import React, {useState, useEffect} from 'react';

import {Container, Label, TextInput} from './styles';
import {Animated, Easing} from 'react-native';

export default function Input({label}) {
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
    if (active) {
      Animated.timing(labelPosition, {
        toValue: 10,
        duration: 350,
        easing: Easing.linear,
      }).start();
    }
    if (!active) {
      Animated.timing(labelPosition, {
        toValue: 25,
        duration: 350,
        easing: Easing.linear,
      }).start();
    }
  }, [active]);

  return (
    <Container>
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
      />
    </Container>
  );
}
