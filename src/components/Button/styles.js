import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width - 50;

export const Container = styled.TouchableOpacity`
  width: ${windowWidth}px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #28aca4;
  border-bottom-color: #1c7872aa;
  border-bottom-width: 4px;
  elevation: 11;
  margin-top: 20px;
`;
export const Text = styled.Text`
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  font-variant: small-caps;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
`;
