import React, { useState } from 'react';
import axios from 'axios';
import './home.css';
import * as S from '../styled/styled';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [erro, setErro] = useState(false);

  function changeUser(e) {
    setUser(e.target.value);
  }

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];
        
        repositories.map(repository => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        history.push('/repositories');
      })
      .catch(err => {
        setErro(true);
      });
  }

  return (
    <div className='home-principal'>
      <div className='engloba-home'>
        <div className='apresentacao'>
          <S.Title>Seja Bem-Vindo Ao Repositories</S.Title>
          <S.SubTitle>Faça uma pesquisa de Repositório de Usuários</S.SubTitle>
        </div>

        <div className='div-principal'>
          <S.ipt className='inputPesquisa' value={user} onChange={changeUser} />
          <S.btn onClick={handlePesquisa}>Pesquisar</S.btn>
        </div>
        {erro ? <S.Aviso>Usuário inexistente!!!</S.Aviso> : ''}
      </div>
    </div>
  );
}

export default Home;