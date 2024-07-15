![image](https://github.com/user-attachments/assets/11df6d43-f836-484b-a452-7cef51639f69)



Ponto Track - Rastreadora de Veículos(clone)
Bem-vindo ao Ponto Track, sua solução confiável para rastreamento de veículos. Este projeto permite o cadastro de clientes para orçamentos de nossos serviços de rastreamento.

Descrição
Este aplicativo foi criado com um backend em Node.js utilizando Sequelize e Express, e um frontend em React com styled-components, Axios e React Router DOM. O banco de dados utilizado é o PostgreSQL, e o deploy foi feito no Heroku.

Funcionalidades
Cadastro de Clientes: Permite que novos clientes se cadastrem para solicitar um orçamento.
Lista de Clientes: Exibe uma lista de clientes cadastrados (acesso protegido por senha).
Validação de Dados: Garante que todos os dados inseridos sejam válidos antes de serem armazenados.
Tecnologias Utilizadas
Backend
Node.js: Ambiente de execução para JavaScript no servidor.
Express: Framework para construção de aplicações web.
Sequelize: ORM para gerenciamento do banco de dados PostgreSQL.
PostgreSQL: Sistema de gerenciamento de banco de dados relacional.
Frontend
React: Biblioteca JavaScript para construção de interfaces de usuário.
styled-components: Biblioteca para estilização de componentes React.
Axios: Cliente HTTP para realizar requisições.
React Router DOM: Biblioteca para gerenciamento de rotas no React.
Deploy
O aplicativo está implantado no Heroku. A configuração do banco de dados PostgreSQL também está feita no Heroku.

Instalação
Backend
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/ponto-track.git
Navegue até o diretório do backend:

bash
Copiar código
cd ponto-track/backend
Instale as dependências:

bash
Copiar código
npm install
Configure as variáveis de ambiente:

bash
Copiar código
cp .env.example .env
Edite o arquivo .env com suas configurações de banco de dados.

Inicie o servidor:

bash
Copiar código
npm start
Frontend
Navegue até o diretório do frontend:
bash
Copiar código
cd ../ponto-track
Instale as dependências:
bash
Copiar código
npm install
Inicie o aplicativo:
bash
Copiar código
npm start
Uso
Acesse a aplicação em http://localhost:3000 para ver a interface do cliente.
A seção de lista de clientes requer autenticação por senha.
Contribuição
Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b feature/nova-feature).
Commit suas mudanças (git commit -m 'Adiciona nova feature').
Faça push para a branch (git push origin feature/nova-feature).
Abra um Pull Request.

link heroku
https://ponto-track-40cc3d399503.herokuapp.com/create

repositório back end
https://github.com/Biazindev/back-Crud-node.git
