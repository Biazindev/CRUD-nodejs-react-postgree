import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Titulo = styled.h1`
   color: #101010;
`

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 380px;
  margin-bottom: 16px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  @media (max-width: 1024px) {
    height: 200px;
    margin-bottom: 64px;
    height: 380px;
  }

  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: 56px;
    height: 380px;
  }

  @media (max-width: 480px) {
    height: 250px;
    margin-bottom: -32px;
    width: 100%;
    img {
    width: 100%;
    height: auto;
    display: block;
  }
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  z-index: 2;

  @media (max-width: 768px) {
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 150px;
    position: absolute;
  }
     @media (max-width: 1024px) {
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 150px;
    position: absolute;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 100px;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Text = styled.div`
  margin-top: 24px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-size: 37px;

  p:first-of-type {
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); 
  }

  p {
    margin-top: 8px;
    color: #F8B526;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); 
    text-align: center;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    position: relative;
    p:first-of-type{
     margin-top: -124px;
     }
  }

  @media (max-width: 1024px) {
    font-size: 28px;
    position: relative;
    p:first-of-type{
     margin-top: -148px;
     }
  }

  @media (max-width: 480px) {
    font-size: 20px;
    position: relative;

     p:first-of-type{
     margin-top: -64px;
     }
  }
`;

export const Efeito = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: #dcdde1;
  color: #101010;
  border-radius: 8px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  width: 95vw;
  label {
    margin: 16px 0 4px 16px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  input {
    width: 90vw;
    margin: 0 auto;
    display: block;
    outline: none;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px; 
    margin-top: 4px;
    }
`;

export const BotaoCadastrar = styled.button`
  width: 90vw;
  margin-left: 16px;
  margin-top: 24px;
  display: block;
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
  transition: background-color 0.3s ease;
  font-size: 24px;

  &:hover {
    background-color: #192a56;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: -24px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 4px;
    margin-top: 16px;
  }
`;

export const LinkA = styled(Link)`
  margin-left: 32px;
  position: relative;
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
    margin-left: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    display: block;
  }
`;
