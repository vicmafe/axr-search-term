import styled from 'styled-components';

export const Container = styled.div`
  background-color: #444444;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh
`;
export const Input = styled.input`
  dislplay: flex;
  width: 85%;
  height: 50px;
  margin-right: 2%;
  min-height: 50px;
  border-radius: 8px;
  outline: none;
  border: 2px solid #fa9043;
  transition: 300ms;
  padding-left: 10px;
  font-size: 15pt;
  color: #444444;
  &:focus {
    border: 5px solid #f77b3d;
    border-radius: 11px;
    transition: 300ms;
  }
`;
export const ButtonSubmit = styled.button`
  width: 15%;
  min-height: 50px;
  min-width: 100px;
  height: 50px;
  background-color: ${({ disabled }) => (disabled ? '#8c8c8c' : '#f77b3d')};
  border: none;
  outline: none;
  font-weight: bold;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'default')};
  color: ${({ disabled }) => (disabled ? '#6a6a6a' : '#444445')};
  border-radius: 10px;
  text-align: center;
`;
export const CardTerm = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  padding: 15px;
  border-radius: 15px;
  justify-content: space-between;
  width: 250px;
  background-color: #fff;
`;
export const ButtonRemove = styled.button`
  display: flex;
  padding: 15px;
  width: 10px;
  background-color: #cc2c2c;
  height: 10px;
  color: #fff;
  border-radius: 50%;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const TermName = styled.div`
  display: flex;
  font-size: 25px;
  font-color: #444444;
  align-items: center;
`;
export const ContainerInput = styled.div`
  display: flex;
  width: 80%;
  margin-top: 5%;
  flex-direction: row;
  align-items: center;
`;
export const ContainerTerms = styled.div`
  display: flex;
  background-color: #242424;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%;
  padding: 15px;
  width: 80%;
  border: 3px inset #f77b3d;
  border-radius: 10px;
`;
export const TitleTerm = styled.p`
  margin: 10px 0 20px 0;
  display: flex;
  font-size: 25px;
  color: #f77b3d;
`;
export const TextMain = styled.p`
  display: flex;
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
  color: #f77b3d;
  text-align: center;
  font-size: 30px;
  margin-top: 5%;
  @media only screen (max-width: 968px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 0px) and (max-width: 968px) {
    font-size: 18px;
  }
  line-height: 1.75;
`;
export const BoxTerm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
export const TitleNoContent = styled.p`
  display: flex;
  margin-top: 10%;
  font-size: 20px;
  color: #fff;
`;
export const Info = styled.p`
  display: flex;
  justify-content: center;
  margin: 3% 0 1% 0;
  font-size: 12px;
  color: #fff;
`;
export const TitleMain = styled.h1`
  display: flex;
  width: 80%;
  text-align: center;
  justify-content: center;
  margin-top: 5%;
  font-size: 50px;
  color: #f77b3d;
  @media only screen (max-width: 968px) {
    font-size: 40px;
  }
  @media only screen and (min-width: 0px) and (max-width: 968px) {
    font-size: 35px;
  }
`;