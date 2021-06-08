import React, { useState } from 'react';

const RegisterTerm = () => {
  const [ term, setTerm ] = useState('');

  const inspectRequest = () => {
    const keyWord = term;
    const urlIspect = 'http://testapp.axreng.com:3000/';
    try {
      return fetch(urlIspect, keyWord)
        .then((response) => response.json());
    } catch (e) {
      console.log('erro desconhecido')
    }
  }

  return (
    <>
      <input
        type="text"
        value={ term }
        onchange={ ({ target }) => setTerm(target.value) }
      />
      <button
        type="button"
        onclick={ () => inspectRequest() }
      >
        Cadastrar
      </button>
    </>
  )
};

export default RegisterTerm;
