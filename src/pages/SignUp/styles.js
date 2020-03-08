import styled from 'styled-components/native';
import {Form as FormComponent} from '@unform/mobile';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height - 200;
const windowWidth = Dimensions.get('window').width - 50;
export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;
export const DataArea = styled.View`
  height: ${windowHeight}px;

  justify-content: center;
  width: ${windowWidth}px;
`;
export const Form = styled(FormComponent)``;
