# Tecnologia para Autistas Não Verbais

Projeto desenvolvido como trabalho final de curso, com o objetivo de auxiliar pessoas autistas não verbais na comunicação do dia a dia por meio de uma interface simples, visual e acessível.

A proposta do sistema é oferecer recursos que facilitem a comunicação, a organização da rotina e o gerenciamento de informações pessoais do usuário.

---

## Objetivo do projeto

Pessoas autistas não verbais podem enfrentar dificuldades para expressar necessidades, sentimentos, preferências e informações importantes no cotidiano.

Este projeto busca contribuir com uma solução tecnológica que auxilie nesse processo, oferecendo uma plataforma com recursos como:

- pranchas de comunicação visual;
- área de lembretes pessoais;
- cadastro e login de usuários;
- perfil individual;
- recuperação de senha;
- armazenamento seguro de dados por usuário.

Cada usuário acessa apenas suas próprias informações, garantindo privacidade e organização.

---

## Funcionalidades principais

### Comunicação visual

O sistema possui uma área com categorias de comunicação, permitindo ao usuário acessar opções visuais relacionadas a temas do dia a dia, como:

- comunicação geral;
- alimentação;
- educação;
- corpo e saúde;
- lugares.

### Autenticação de usuários

O projeto possui sistema de autenticação com:

- cadastro de usuário;
- login;
- logout;
- sessão persistente por cookie;
- proteção de rotas;
- senha armazenada com hash;
- recuperação de senha por token temporário.

### Lembretes

Usuários logados podem gerenciar seus próprios lembretes.

Cada lembrete possui:

- título;
- descrição;
- data;
- horário;
- status.

Funcionalidades disponíveis:

- adicionar lembrete;
- listar lembretes;
- editar lembrete;
- excluir lembrete.

Os lembretes ficam vinculados ao usuário logado, impedindo que um usuário visualize os dados de outro.

### Perfil do usuário

A aplicação permite que o usuário acesse sua área de perfil para:

- visualizar seus dados;
- alterar nome;
- alterar e-mail;
- alterar senha;
- excluir a própria conta.

Ao excluir a conta, os lembretes vinculados ao usuário também são removidos.

### Recuperação de senha

O sistema possui fluxo de recuperação de senha.

O usuário informa o e-mail cadastrado e recebe um link para redefinir a senha.

Durante o desenvolvimento, caso o serviço de e-mail não esteja configurado, o link de recuperação é exibido no terminal do backend.

---

## Tecnologias utilizadas

### Frontend

- React
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- BcryptJS
- JSON Web Token
- Cookie Parser
- CORS
- Dotenv
- Express Validator
- Nodemailer
- Nodemon

---

## Estrutura do projeto

```txt
Tecnologia-Autismo/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.js
│   │
│   └── package.json
│   
├── package.json
├── README.md
└── .gitignore