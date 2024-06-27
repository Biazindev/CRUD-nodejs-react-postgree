import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MaskedInput from 'react-text-mask';
import { LinkA, LinkB, Efeito, BtnSalvar } from './styles'

const BASE_URL = 'https://back-pt-f0d480ed7f9c.herokuapp.com/';

function ItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', endereco: '', email: '', telefone: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${BASE_URL}/api/items/${id}`)
      .then(response => {
        setItem(response.data);
        setFormData({
          name: response.data.name,
          endereco: response.data.endereco,
          email: response.data.email,
          telefone: response.data.telefone
        });
      })
      .catch(error => console.error('Ocorreu um erro ao buscar o item!', error));
  }, [id]);

  if (!item) return <div>Carregando...</div>;

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.put(`${BASE_URL}/api/items/${id}`, formData)
      .then(response => {
        setItem(response.data);
        setIsEditing(false);
      })
      .catch(error => console.error('Ocorreu um erro ao atualizar o item!', error));
  };

  const handleDelete = (id) => {
    axios.delete(`${BASE_URL}/api/items/${id}`)
      .then(() => {
        navigate('/'); // Redirect to items list after deletion
      })
      .catch(error => console.error('Ocorreu um erro ao excluir o item!', error));
  };

  return (
    <Efeito>
      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              Nome:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Endereço:
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Telefone:
              <MaskedInput
                mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                className="form-control"
                guide={false}
                value={formData.telefone}
                onChange={e => setFormData({ ...formData, telefone: e.target.value })}
              />
            </label>
          </div>
          <BtnSalvar type="submit">Salvar</BtnSalvar>
        </form>
      ) : (
        <div>
          <h1>{item.name}</h1>
          <p>{item.endereco}</p>
          <p>{item.email}</p>
          <p>{item.telefone}</p>
          <LinkA onClick={handleEditClick}>Editar</LinkA>
        </div>
      )}
      <LinkB onClick={() => handleDelete(item.id)}>Delete</LinkB>
      <LinkA to="/">Retornar</LinkA>
    </Efeito>
  );
}

export default ItemDetail;
