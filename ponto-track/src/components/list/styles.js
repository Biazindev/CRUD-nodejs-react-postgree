import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const CabecalhoTabela = styled.th`
  padding: 12px;
  background-color: #007bff;
  color: white;
  text-align: left;-
  border: 1px solid #ddd;
`;

export const LinhaTabela = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const CelulaTabela = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const LinkTabela = styled(Link)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkT = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  margin-top: 32px;
  color: blue;
  text-decoration: none;
  outline: none;
  border: 1px solid #ccc;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  z-index: 1000;

  &:hover {
    background-color: #192a56;
  }
    @media (max-width: 480px) {
    bottom: 10px;
    }
`;

export const Text = styled.h1`
color: #2f3542;
font-size: 24px;
text-align: center;
padding: 16px;
`