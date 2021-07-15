import styled from 'styled-components';
import color from './color';

const { borderColor, darkBlue, white } = color;

const StyledCounter = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const AuthorLeft = styled.div`
  flex: 1;
  padding:126px 80px 169px 146px;
  align-items: center;
  justify-content: center;
  background-color: #E5E5E5;
`;

const AuthorRight = styled.div`
  flex: 1;
  padding: 31px 138px 101px 150px;
  margin:31px auto;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  margin:10px 20px;
  width:350.35px;
  height:266.19px;
`;

const Img1 = styled.img`
  margin:-35px 20px 10px 20px;
  width:300px;
  height:482,33px
`;

const H2 = styled.h2`
  margin:20px 20px 20px -40px;
  font-family:Arial Black;
  font-weight:900;
  text-align:center;
`;

const Paragraph = styled.h3`
  margin:10px 20px;
 font-family:Arial Black;
 font-weight:900;
 font-size:36px;
 line-height:50,77px;
`;

const StyledInput = styled.input`
  display:block;
  width:330px;
  height:46px;
  margin:22px;
  padding:5px 20px;
  background: #FFFFFF;
  border: 1px solid ${borderColor};
  box-sizing: border-box;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  margin:10px 20px;
  width:330px;
  height:82px;
  padding:5px 20px;  
  background-color:${white};
  border-radius:10px;
`;

const buttonProps = {
  fontSize: {
    md: '16px',
    lg: '24px',
    sm: '12px',
  },
  padding: {
    md: '8px 16px',
    lg: '12px 20px',
    sm: '4px 8px',
  },
}

const Button = styled.button`
  width:328px;
  height:46px;
  margin:20px 20px;
  font-size: ${props => props.size ? buttonProps.fontSize[props.size] : buttonProps.fontSize.md};
  padding: ${props => props.size ? buttonProps.padding[props.size] : buttonProps.padding.md};
  background-color:${darkBlue};
  color:${white};
  border-radius: 100px;
  border: 1px solid ${borderColor};
  transition: all 0.3s linear;
  &.active, &:hover, &.main {
    background-color: ${white};
    color: ${darkBlue};
    border-color: ${darkBlue}
`;


export { StyledInput, Img, Img1, StyledCounter, AuthorLeft, AuthorRight, Paragraph, TextArea, Button, H2 }