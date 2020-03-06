import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.View`
  display: flex;
  /* flex: 1; */
`;

export const Label = styled(Animated.Text)`
  color: #999;
  text-transform: uppercase;
  position: absolute;
  /* top: ${props => props.position}; */
  /* font-size: ${props => (props.active ? '12px' : '16px')}; */
  padding-left: 1px;
`;
export const TextInput = styled.TextInput`
  border-bottom-color: #28aca4;
  border-bottom-width: 2px;
  padding-top: 20px;
  padding-left: 1px;
  color: #999;
`;
