import React, { useState, useEffect } from 'react';

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
      <div key={index}>
        { item}
      </div>
    ));
    return urls.slice(0, 10);
  };

  const noContentUrls = () => {
    if (statusRequestTerm.status === 'active') {
      return <p>O termo solicitado ainda está em processamento,
        até o momento nenhum resultado encontrado. Aguarde a conclusão.</p>
    }
    if (statusRequestTerm.status === 'done') {
      return <p>O termo solicitado não retornou resultados</p>
    }
  };

  useEffect(() => {
    inspectRequest()
    findTermById(id)
  }, []);

  return (
    <>
      <h1>id do termo: {statusRequestTerm.id}</h1>
      <h1>status: {statusRequestTerm.status}</h1>
      <h1>Termo solicitado: {termName}</h1>
      { isLoading ?
        <p>Loading...</p> :
        !statusRequestTerm.urls || statusRequestTerm.urls.length < 1 ?
          noContentUrls() :
          listUrls()
      }
    </>
  );
};

export default RegisteredTerm;