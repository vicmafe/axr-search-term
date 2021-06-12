import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d7e3fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%
  height: 100vh;
`;
export const Input = styled.input`
  dislplay: flex;
  align-items: center;
  width: 50%;
  min-height: 50px;
  border-radius: 3px;
  outline: none;
  border: 2px solid;
  transition: 300ms;
  padding-left: 5px;
  font-size: 15pt;
  color: #6665DD;
  &:focus {
    border-color: #6665DD; // color
    transition: 300ms;
  }
`;
export const Button = styled.button`
  padding: 15px;
  width: 100%;
  background-color: '#6665DD')};
  transition: 650ms;
  border: none;
  outline: none;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'default')};
  color: #DDDDE4;
  border-radius: 8px;
  text-align: center;
  margin: 2% 0;
  &:hover {
    filter: grayscale(40%);
  }
`;
export const CardTerm = styled.div`
`;
export const ButtonRemove = styled.button`
`;
export const TermName = styled.p`
`;