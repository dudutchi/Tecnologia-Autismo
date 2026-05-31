# Tecnologia para Autistas Não Verbais

Projeto desenvolvido como trabalho final de curso, com o objetivo de auxiliar pessoas autistas não verbais na comunicação do dia a dia por meio de uma interface simples, visual, acessível e intuitiva.

A proposta do sistema é oferecer recursos que facilitem a comunicação, a organização da rotina e o gerenciamento de informações pessoais do usuário.

---

## Objetivo do projeto

Pessoas autistas não verbais podem enfrentar dificuldades para expressar necessidades, sentimentos, preferências e informações importantes no cotidiano.

Este projeto busca contribuir com uma solução tecnológica que auxilie nesse processo, oferecendo uma plataforma com recursos como:

- pranchas de comunicação visual;
- cards com reprodução de voz;
- área de lembretes pessoais;
- favoritos;
- cadastro e login de usuários;
- perfil individual;
- escolha de preferência de voz;
- recuperação de senha;
- armazenamento seguro de dados por usuário.

Cada usuário acessa apenas suas próprias informações, garantindo privacidade, organização e segurança.

---

## Funcionalidades principais

### Comunicação visual

O sistema possui áreas com categorias de comunicação, permitindo ao usuário acessar opções visuais relacionadas a temas do dia a dia.

Entre as páginas disponíveis estão:

- Ações;
- Pessoas;
- Interação;
- Soletrar;
- Palavras essenciais;
- Favoritos.

Os cards foram pensados para facilitar a comunicação por meio de textos simples, imagens ilustrativas e reprodução de áudio.

---

### Cards com voz

Ao clicar em um card, o sistema reproduz em áudio o texto correspondente.

O usuário pode configurar a preferência de voz no perfil, escolhendo entre:

- voz feminina;
- voz masculina.

Essa preferência fica salva para o usuário logado.

---

### Favoritos

O usuário pode favoritar cards de comunicação para acessá-los com mais facilidade posteriormente.

A página de favoritos permite visualizar os cards marcados como favoritos pelo usuário.

---

### Autenticação de usuários

O projeto possui sistema de autenticação com:

- cadastro de usuário;
- login;
- logout;
- sessão persistente por cookie;
- proteção de rotas;
- senha armazenada com hash;
- recuperação de senha por token temporário.

As rotas protegidas só podem ser acessadas por usuários autenticados.

---

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
- excluir lembrete;
- ouvir as informações do lembrete em áudio.

Os lembretes ficam vinculados ao usuário logado, impedindo que um usuário visualize os dados de outro.

---

### Perfil do usuário

A aplicação permite que o usuário acesse sua área de perfil para:

- visualizar seus dados;
- alterar nome;
- alterar e-mail;
- alterar senha;
- alterar preferência de voz;
- excluir a própria conta.

Ao excluir a conta, os lembretes vinculados ao usuário também são removidos.

---

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
- JavaScript

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
