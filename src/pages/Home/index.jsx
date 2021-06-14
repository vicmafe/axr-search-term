import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Logo from '../../images/LOGO.png';

const Home = () => {
  return (
    <S.Container>
      <S.Title>Bem vindo ao</S.Title>
      <Link style={{ textDecoration: 'none'}}
        to='/register'
      >
        <S.ImagemSunoMovies
          src={Logo}
          alt="logo suno movies"
        />
        <S.Title>Web Crawler</S.Title>
      </Link>
    </S.Container>
  )
};

export default Home;