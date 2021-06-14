import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import iconReturn from '../../images/icon-arrow.svg';
import * as S from './style';
import iconHome from '../../images/icon-home.svg';


import axios from 'axios';

const RegisteredTerm = (props) => {
  const [statusRequestTerm, setStatusRequestTerm] = useState({});
  const [termName, setTermName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { match } = props;
  const { id } = match.params;

  const inspectRequest = async () => {
    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      url: `http://testapp.axreng.com:3000/crawl/${id}`,
    };
    try {
      await axios(options)
        .then((response) => setStatusRequestTerm(response.data));
      return setIsLoading(false);
    } catch (e) {
      return alert('erro de conexão!')
    }
  };

  const findTermById = (id) => {
    const termList = JSON.parse(localStorage.getItem('terms'))
    const { name } = termList.find(term => term.id === id);
    return setTermName(name);
  }

  const listUrls = () => {
    const urls = statusRequestTerm.urls.map((item, index) => (
      <S.Urls key={index}>
        { item}
      </S.Urls>
    ));
    return (
      <>
        <S.MessageStatus>A pesquisa encontrou os seguintes links:</S.MessageStatus>
        { urls.slice(0, 10)}
      </>
    );
  };

  const noContentUrls = () => {
    if (statusRequestTerm.status === 'active') {
      return <S.MessageStatus>O termo solicitado ainda está em processamento,
        até o momento nenhum resultado encontrado. Aguarde a conclusão .</S.MessageStatus>
    }
    if (statusRequestTerm.status === 'done') {
      return <S.MessageStatus>O termo solicitado não retornou resultados</S.MessageStatus>
    }
  };

  useEffect(() => {
    inspectRequest()
    findTermById(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.LabelTerm>Termo solicitado: </S.LabelTerm>
      <S.Term color='#fff' colorText='#f77b3d'>{termName}</S.Term>
      <S.LabelTerm>Status:</S.LabelTerm>
      <S.Term
        {
        ...statusRequestTerm.status === 'active' ?
          { color: '#00a000', colorText: '#fff' } :
          { color: '#0000cd', colorText: '#f77b3d' }
        }
      >
        {
          statusRequestTerm.status
        }
      </S.Term>
      {
        isLoading ?
          <S.MessageStatus>Loading...</S.MessageStatus> :
          !statusRequestTerm.urls || statusRequestTerm.urls.length < 1 ?
            noContentUrls() :
            listUrls()
      }
      <S.BoxIcons>
        <S.Icon>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <img src={iconReturn} alt="icon return" />
          Voltar
        </Link>
        </S.Icon>
        <S.Icon>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={iconHome} alt="icon home" />
          Início
        </Link>
        </S.Icon>
      </S.BoxIcons>
    </S.Container>
  );
};

export default RegisteredTerm;