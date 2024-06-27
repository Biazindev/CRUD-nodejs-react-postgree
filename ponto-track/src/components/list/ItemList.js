import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CabecalhoTabela, Tabela, LinkT, CelulaTabela, LinhaTabela, LinkTabela, Text} from './styles'

const BASE_URL = 'http://localhost:3000';

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/items`)
      .then(response => setItems(response.data))
      .catch(error => console.error('Ocorreu um erro ao buscar os itens!', error));
  }, []);

  return (
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
  );
  
}

export default ItemList;
