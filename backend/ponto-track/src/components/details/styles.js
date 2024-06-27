import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkA = styled(Link)`
  display: block;
  margin: 0 auto;
  margin-top: 16px; 
  color: blue;
  text-decoration: none;
  outline: none;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 90vw;

  &:hover {
    background-color: #192a56;
  }
`;

export const LinkB = styled(Link)`
  display: block;
  margin: 16px auto;
  text-decoration: none;
  outline: none;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #ff4d4d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 90vw;

  &:hover {
    background-color: #c23616;
  }
`;

export const BtnSalvar = styled.button`
  display: block;
  margin: 16px auto;
  outline: none;
  border: 1px solid #ccc;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 90vw;

  &:hover {
    background-color: #192a56;
  }
`;

export const Efeito = styled.div`
  margin-top: 24px;
  margin-bottom: 64px;
  background-color: #dcdde1;
  color: #2f3542;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  width: 95vw;
  text-transform: capitalize;

  label {
    margin: 16px 0 4px 16px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  
  ${LinkA}, ${LinkB}, ${BtnSalvar} {
    border-bottom: 1px solid #ddd;
  }

  ${LinkA}:last-of-type, ${LinkB}:last-of-type, ${BtnSalvar}:last-of-type {
    border-bottom: none;
  }
`;
