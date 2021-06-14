import styled from 'styled-components';

export const Container = styled.div`
  dislplay: flex;
  background-color: #212125;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const Title = styled.div`
  display: flex;
  color: white;
  margin-bottom: 3%;
  margin-left: 35%;
  padding-top: 5%;
  font-size: 10vh;
  font-family: "Helvetica";
`;
export const ImagemSunoMovies = styled.img`
  display: flex;
  justify-content: center;
  width: 300px;
  margin-top: 8%;
  margin-left: 40%;
  animation: bounce 3s infinite alternate;
  -webkit-animation: bounce 0.3s infinite alternate;
  @keyframes bounce {
    from {
      transform: translatex(px);
    }
    to {
      transform: translatex(60px);
    }
  }
`;