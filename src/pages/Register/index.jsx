import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../context/AppContext'

const RegisterTerm = () => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);
  const [ responseFetch, setResponseFetch ] = useState({})
  const [ disableButton, setDisableButton ] = useState(true)
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
        .then((response) => setResponseFetch(response));
    } catch (e) {
      console.log('erro desconhecido')
    }
  }
  const validateTerm = () => {
    if (searchTerm.length > 4) setDisableButton(false);
    if (searchTerm.length > 31 || searchTerm.length < 5) setDisableButton(true);
  
  };

  useEffect(() => validateTerm(), [searchTerm]);

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
    </>
  )
};

export default RegisterTerm;
