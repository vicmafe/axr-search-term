import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const RegisteredTerm = (props) => {
  const { match } = props;
  const { name } = match.params;
  const { responseFetchTerm } = useContext(AppContext);
  console.log('resposta no registered:', responseFetchTerm)
  return (
    <>
      <h1>{ name }</h1>
    </>
  );
};

export default RegisteredTerm;