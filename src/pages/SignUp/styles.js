import styled from 'styled-components/native';
import {Form as FormComponent} from '@unform/mobile';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height - 200;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
export const DataArea = styled.View`
  /* background-color: #ccc; */
  height: ${windowHeight}px;
  /* flex: 1; */
  justify-content: center;
`;
export const Form = styled(FormComponent)``;
