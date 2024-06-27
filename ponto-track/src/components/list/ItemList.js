import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CabecalhoTabela, Tabela, LinkT, CelulaTabela, LinhaTabela, LinkTabela, Text } from './styles';
import LoginForm from '../LoginForm';

const BASE_URL = 'https://back-pt-f0d480ed7f9c.herokuapp.com';

function ItemList() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setError('');

    } else {
      setError('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  useEffect(() => {
   if (isLoggedIn) {
      axios.get(`${BASE_URL}/api/items`)
        .then(response => setItems(response.data))
        .catch(error => console.error('Ocorreu um erro ao buscar os itens!', error));
    }
  }, [isLoggedIn]);

  return (
    isLoggedIn ? (
      <div>
        <LinkT to="/create">Cadastrar nova solicitação</LinkT>
        <Text>Clientes aguardando orçamento</Text>
        <Tabela>
          <thead>
            <tr>
              <CabecalhoTabela>Nome</CabecalhoTabela>
              <CabecalhoTabela>Endereço</CabecalhoTabela>
              <CabecalhoTabela>Email</CabecalhoTabela>
              <CabecalhoTabela>Telefone</CabecalhoTabela>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <LinhaTabela key={item.id}>
                <CelulaTabela>
                  <LinkTabela to={`/items/${item.id}`}>{item.name}</LinkTabela>
                </CelulaTabela>
                <CelulaTabela>{item.endereco}</CelulaTabela>
                <CelulaTabela>{item.email}</CelulaTabela>
                <CelulaTabela>{item.telefone}</CelulaTabela>
              </LinhaTabela>
            ))}
          </tbody>
        </Tabela>
      </div>
    ) : (
      <LoginForm onLogin={handleLogin} />
    )
  );
}

export default ItemList;
