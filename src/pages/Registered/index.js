import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const RegisteredTerm = () => {
  const { responseFetchTerm } = useContext(AppContext);
  console.log('resposta no registered:', responseFetchTerm)
  return (
    <>
      <h1>Term</h1>
    </>
  );
};

export default RegisteredTerm;