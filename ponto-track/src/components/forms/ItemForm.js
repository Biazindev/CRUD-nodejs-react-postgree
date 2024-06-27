import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import MaskedInput from 'react-text-mask';
import {Header, Logo, Text, Efeito, BotaoCadastrar} from './styles'
import carro from '../../utils/car.jpg'
import { LinkT } from '../../styles/index'
import { Link } from 'react-router-dom';

const BASE_URL = 'http://localhost:3000';

function ItemForm() {
  const [name, setName] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/api/items`)
      .then(response => setItems(response.data))
      .catch(error => console.error('Ocorreu um erro ao buscar a lista de itens!', error));

    if (id) {
      axios.get(`${BASE_URL}/api/items/${id}`)
        .then(response => {
          const item = response.data;
          setName(item.name);
          setEndereco(item.endereco);
          setEmail(item.email);
          setTelefone(item.telefone);
        })
        .catch(error => console.error('Ocorreu um erro ao buscar o item!', error));
    }
  }, [id]);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Check for duplicate name
    const isDuplicate = items.some(item => item.name === name && item.id !== id);
    if (isDuplicate) {
      setError('Cliente já cadastrado!');
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      setError('Formato de email inválido. Por favor digite um email válido.');
      return;
    }

    const item = { name, endereco, email, telefone };

    if (id) {
      axios.put(`${BASE_URL}/api/items/${id}`, item)
        .then(() => navigate('/'))
        .catch(error => console.error('Ocorreu um erro ao atualizar o item!', error));
    } else {
      axios.post(`${BASE_URL}/api/items`, item)
        .then(() => navigate('/'))
        .catch(error => console.error('Ocorreu um erro ao criar o item!', error));
    }
  }

  return (
    <>
    <div>
      <Header>
        <img src={carro} />
      </Header>
      <Text>
        <p>Tenha em suas mãos</p>
        <p>A PROTEÇÃO DE SEUS VEÍCULOS</p>
      </Text>
      <Logo>
        <img src="https://lp.pontotrack.com/wp-content/uploads/2024/04/logo-ponto-track-1.svg" />
      </Logo>
      <Efeito>
        <h1>{id ? 'Edit' : 'Solicite'} seu orçamento</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label>Endereço:</label>
            <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Telefone:</label>
            <MaskedInput
              mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              className="form-control"
              guide={false}
              value={telefone}
              onChange={e => setTelefone(e.target.value)} />
            <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </form>
      </Efeito>
    </div>
    <LinkT to="/">Consultar clientes cadastrados</LinkT>
    </>

  );
}

export default ItemForm;
