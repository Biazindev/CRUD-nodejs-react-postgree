import styled from 'styled-components';

export const Efeito = styled.form`
  margin-top: 24px;
  margin-bottom: 32px;
  background-color: #dcdde1;
  color: #2f3542;
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
    margin-top: 16px;
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
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-left: 2px;
  }
`;
