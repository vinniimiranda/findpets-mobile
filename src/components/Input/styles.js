import styled from 'styled-components/native';
import {Animated, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width - 50;

export const Container = styled.KeyboardAvoidingView`
  display: flex;
`;

export const Label = styled(Animated.Text)`
  color: #999;
  text-transform: uppercase;
  position: absolute;
  padding-left: 1px;
`;
export const TextInput = styled.TextInput`
  border-bottom-color: #28aca4;
  border-bottom-width: 2px;
  padding-top: 20px;
  padding-bottom: 5px;
  padding-left: 1px;
  color: #999;
  width: ${windowWidth}px;
`;
