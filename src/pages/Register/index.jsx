/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const RegisterTerm = () => {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ responseFetchTerm, setResponseFetchTerm ] = useState([]);
  const [ disableButton, setDisableButton ] = useState(true)
  const history = useHistory();

  const inspectRequest = async () => {
    const keyword = { 'keyword': searchTerm };
    const options = {
      method: 'POST',
      headers:{ 'Content-Type': 'application/json' },
      url: 'http://testapp.axreng.com:3000/crawl',
      data: keyword,
    };
    try {
      await axios(options)
        .then((response) => addIdTerm({ name: searchTerm, id: response.data.id }));
    } catch (e) {
      console.log('erro desconhecido')
    }
  };

  const addIdTerm = (id) => {
    const updateTermListSearched = [ ...responseFetchTerm, id ];
    return setResponseFetchTerm(updateTermListSearched);
  }

  const verifyLocalStorage = () => {
    if (localStorage.terms) {
      const termList = JSON.parse(localStorage.getItem('terms'))
      console.log('termos no local storage', termList)
      return setResponseFetchTerm(termList)
    }
  }

  const validateTerm = () => {
    if (searchTerm.length > 4) setDisableButton(false);
    if (searchTerm.length > 31 || searchTerm.length < 5) setDisableButton(true);
  };

  useEffect(() => verifyLocalStorage(), []);
  useEffect(() => validateTerm(), [searchTerm]);
  useEffect(() => localStorage.setItem('terms', JSON.stringify(responseFetchTerm)), [responseFetchTerm]);

  return (
    <>
      <input
        type="text"
        onChange={ (e) => setSearchTerm(e.target.value) }
      />
      <button
        disabled={ disableButton }
        type="button"
        onClick={ () => inspectRequest() }
      >
        Cadastrar
      </button>
      <button
        type="button"
        onClick={ () => history.push('/registered') }
      >
        Solicitações Cadastradas
      </button>
    </>
  )
};

export default RegisterTerm;
