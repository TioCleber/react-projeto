import React, { useEffect, useState } from 'react';
import './repositories.css';
import * as S from '../styled/styled';
import { useHistory } from 'react-router-dom';


function Repositories(){
  const history = useHistory();
  const [ repositories, setRepositories] = useState([]);

  useEffect(() =>{
    let repositoriesName = localStorage.getItem('repositoriesName');
    if(repositoriesName != null){
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else{
      history.push('/');
    }
  }, []);

  return(
    <>
      <S.Title>Repositories</S.Title>
        <S.Lista>
          { repositories.map( repository =>{
            return(
              <S.linha>Repositório: {repository}</S.linha>
            );
          }) }
        </S.Lista>

        <S.Links to='/'>Voltar</S.Links>
        <S.Aviso>Ao recarregar a página, você será redirecionádo ao home.</S.Aviso>
    </>
  );
}

export default Repositories;