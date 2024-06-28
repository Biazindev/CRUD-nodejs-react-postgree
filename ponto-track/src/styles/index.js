import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';


const EstiloGlobal = createGlobalStyle`
* { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    list-style: none;   
`;
export default EstiloGlobal;

export const LinkT = styled(Link)`
  margin: 16px;
  margin-left: 32px;
  bottom: 20px; 
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

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 14px;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    width: 95vw;
    font-size: 12px;
    display: block;
    margin-left: 8px;
    margin-top: -32px;
  }
`;

