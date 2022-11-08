# Projeto Trybesmith
Olá. Bem vindo ao projeto Trybesmith. Esta aplicação consiste na construção de uma loja de itens medievais utilizando as tecnologias aprendidas durante o curso da Trybe no módulo de back-end.

# Funcionalidades
A aplicação possui as seguintes funcionalidades:
- cadastrar usuários
- listar usuários
- rotas autenticadas pelo login do usuário
- cadastro de produtos
- listagem de produtos
- cadastro de pedidos
- listagem de pedidos

# Como rodar?
## utilizando o docker
No projeto existe um arquivo `docker-compose.yml` para a orquestração dos containers (node e MySql).  
1. Primeiro certifique-se de que as portas utilizadas pelos containers estão livres (3000 para o node e 3306 para o Mysql) ou altere as portas que cada container está mapeado para uma que esteja livre.  
2. Caso queira você pode definir as informações básicas do banco a ser criado pelas variáveis de ambiente presentes no arquivo do compose.  
3. Rode `docker-compose up -d` para subir os containers
4. Entre no container do node e rode o projeto com `npm start` ou `npm run dev` caso queria entrar em modo de desenvolvimento

## sem o docker
1. Primeiro certifique-se de que as portas utilizadas pelo app estão livres (3000 para o node e 3306 para o Mysql).
2. Crie um arquivo `.env` com as configurações básicas do banco de dados que será utilizado na aplicação (existe um modelo `exemplo.env` na raiz do projeto)
3. Rode o projeto com `npm start` ou `npm run dev` caso queria entrar em modo de desenvolvimento

# Populando o banco de dados
Na raiz da aplicação existe um arquivo Trybesmith.sql com as queries necessárias para criar e popular o banco de dados

# Tecnologias utilizadas
- NodeJs
- ExpressJS
- Arquitetura MSC
- Mysql
- JWT
- Typescript

# Observações importantes
Apenas os arquivos dentro da pasta `src` foram inteiramente de autoria pessoal, todos os outros arquivos foram criados pela Trybe.
