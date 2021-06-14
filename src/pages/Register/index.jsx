import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';


import axios from 'axios';

const RegisterTerm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [responseFetchTerm, setResponseFetchTerm] = useState([]);
  const [disableButton, setDisableButton] = useState(true)
  const [termExists, setTermExists] = useState(false)

  const processTermRequest = (term) => {
    const termRepeated = responseFetchTerm.find(item => item.name === term)
    if (termRepeated) return alert('Este termo já possui solicitação em andamento, por favro digite outro.');
    if (!termRepeated) {
      setTermExists(true);
      return inspectRequest();
    }
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
    const termList = JSON.parse(localStorage.getItem('terms'))
    console.log(termList)
    if (termList.length >= 1) {
      setTermExists(true);
      return setResponseFetchTerm(termList);
    }
    return setTermExists(false);
  }

  const removeTerm = (id) => {
    const termsMaintain = responseFetchTerm.filter(term => term.id !== id)
    setResponseFetchTerm(termsMaintain);
    if (termsMaintain.length < 1) {
      return setTermExists(false);
    }
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
      {
        termExists ?
          <></> :
          <>
            <S.TitleMain>Que bom que vc está aqui!</S.TitleMain>
            <S.TextMain>
              Vou te explicar como funciona, primeiramente você precisará cadastar o termo
              que você deseja fazer o web crawling na rede. Pode fazer isso digitando no 
              campo abaixo e em seguida clique em cadastrar.
            </S.TextMain>
          </>
      }
      <S.ContainerInput>
        <S.Input
          placeholder="Entre 4 e 31 caracteres"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <S.ButtonSubmit
          disabled={disableButton}
          onClick={() => processTermRequest(searchTerm)}
        >
          Cadastrar
      </S.ButtonSubmit>
      </S.ContainerInput>
      {
        !termExists ? <></> :
          <S.ContainerTerms>
            <S.TitleTerm>
              Termos cadastrados:
            </S.TitleTerm>
            {
              <S.BoxTerm>
                {
                  responseFetchTerm.map((term, index) => (
                    <S.CardTerm key={index}>
                      <S.TermName>
                        <Link style={{ textDecoration: 'none', color: '#444444' }} to={`/${term.id}`}>
                          {term.name}
                        </Link>
                      </S.TermName>
                      <S.ButtonRemove
                        onClick={() => removeTerm(term.id)}
                      >
                        X
                      </S.ButtonRemove>
                    </S.CardTerm>
                  ))
                }
              </S.BoxTerm>
            }
            <S.Info>
              * OBS: Para ver detalhes do processamento da sua solicitação de consulta, clique no termo desejado.
              Caso deseje excluir algum termo, clique no x.
            </S.Info>
          </S.ContainerTerms>
      }
    </S.Container>
  )
};

export default RegisterTerm;
