import styled from 'styled-components';
import color from './color';

const {borderColor} = color;

const StyledInput = styled.input`
  background: #FFFFFF;
  border: 1px solid ${borderColor};
  box-sizing: border-box;
  border-radius: 10px;
  height: 46px;
  min-width: 300px;
`;


export {StyledInput}