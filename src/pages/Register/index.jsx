import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';


import axios from 'axios';

const RegisterTerm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [responseFetchTerm, setResponseFetchTerm] = useState([]);
  const [disableButton, setDisableButton] = useState(true)

  const processTermRequest = (term) => {
    const termRepeated = responseFetchTerm.find(item => item.name === term)
    if (termRepeated) return alert('Este termo já possui solicitação em andamento, por favro digite outro.');
    if (!termRepeated) return inspectRequest();
  };

  const inspectRequest = async () => {
    const keyword = { 'keyword': searchTerm };
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      url: 'http://testapp.axreng.com:3000/crawl',
      data: keyword,
    };
    try {
      await axios(options)
        .then((response) => addIdTerm({ name: searchTerm, id: response.data.id }));
    } catch (e) {
      return alert('erro de conexão!')
    }
  };

  const addIdTerm = (id) => {
    const updateTermListSearched = [...responseFetchTerm, id];
    return setResponseFetchTerm(updateTermListSearched);
  }

  const verifyLocalStorage = () => {
    if (localStorage.terms) {
      const termList = JSON.parse(localStorage.getItem('terms'))
      return setResponseFetchTerm(termList)
    }
  }

  const removeTerm = (id) => {
    const termsMaintain = responseFetchTerm.filter(term => term.id !== id)
    return setResponseFetchTerm(termsMaintain);
  }

  useEffect(() => verifyLocalStorage(), []);

  useEffect(() => {
    if (searchTerm.length > 4) setDisableButton(false);
    if (searchTerm.length < 5 || searchTerm.length > 31) setDisableButton(true);
  }, [searchTerm]);
  
  useEffect(() => {
    localStorage.setItem('terms', JSON.stringify(responseFetchTerm))
  }, [responseFetchTerm]);

  return (
    <S.Container>
      <S.Input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <S.Button
        disabled={disableButton}
        type="button"
        onClick={() => processTermRequest(searchTerm)}
      >
        Cadastrar
      </S.Button>
      {
        responseFetchTerm.map((term, index) => (
          <S.CardTerm key={index}>
            <Link to={`/${term.id}`}>
              <S.TermName>{term.name}</S.TermName>
            </Link>
            <S.ButtonRemove
              onClick={() => removeTerm(term.id)}
            >
              X
            </S.ButtonRemove>
          </S.CardTerm>
        ))
      }
    </S.Container>
  )
};

export default RegisterTerm;
