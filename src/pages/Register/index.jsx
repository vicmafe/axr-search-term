import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const RegisterTerm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [responseFetchTerm, setResponseFetchTerm] = useState([]);
  const [disableButton, setDisableButton] = useState(true)
  const [modal, setModal] = useState(false);

  const processTermRequest = (term) => {
    const termReplace = responseFetchTerm.find(item => item.name === term)
    if (termReplace) return setModal(true);
    if (!termReplace) return inspectRequest();
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
      console.log('erro de conexão')
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
    <>
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        disabled={disableButton}
        type="button"
        onClick={() => processTermRequest(searchTerm)}
      >
        Cadastrar
      </button>
      {
        responseFetchTerm.map((term, index) => (
          <div key={index}>
            <Link to={`/${term.name}`}>
              <p>{term.name}</p>
            </Link>
            <button
              onClick={() => removeTerm(term.id)}
            >
              X
            </button>
          </div>
        ))

      }
    </>
  )
};

export default RegisterTerm;
