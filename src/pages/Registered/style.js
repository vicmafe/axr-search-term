import styled from 'styled-components';

export const Container = styled.div`
  background-color: #444444;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh
`;
export const Term = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
  width: 20%;
  border-radius: 3px;
  padding: 2%;
  display: flex;
  font-size: 30px;
  color: ${(props) => props.colorText};
  background-color: ${(props) => props.color};
  height: 50px;
`;
export const LabelTerm = styled.p`
  margin-top: 2%;
  display: flex;
  font-size: 20px;
  color: #f77b3d;
`;
export const MessageStatus = styled.div`
  color: #fff;
  font-size: 14px;
  margin: 1%;
`;
export const Urls = styled.div`
  color: #f77b3d;
  margin: 5px;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  width: 20px;
  margin: 10px 20px 0 20px;
  filter: invert(65%) sepia(41%) saturate(4278%) hue-rotate(335deg) brightness(101%) contrast(94%);
`;
export const BoxIcons = styled.div`
  display: flex;
  height: 60px;
  margin: 5px;
  align-items: flex-end;
  flex-direction: row;
`;