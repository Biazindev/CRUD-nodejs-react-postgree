import React, { useState } from 'react';
import * as S from './styles';

const LoginForm = ({ onLogin, error }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <S.Efeito onSubmit={handleLogin}>
      <div>
        <label>Usuário:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <S.BotaoCadastrar type="submit">Login</S.BotaoCadastrar>
    </S.Efeito>
  );
};

export default LoginForm;
