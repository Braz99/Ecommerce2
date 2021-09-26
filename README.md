# Site simples que simula uma loja
#### Link do projeto: https://lojamarine.netlify.app/
[![Netlify Status](https://api.netlify.com/api/v1/badges/45247886-24a7-480a-ac78-d92b37a41266/deploy-status)](https://lojamarine.netlify.app/)

## Sobre
Este site foi feito com base no desafio do treinamento hiring coders, que é patrocinado pela VTEX. O desafio era criar só uma landing page, mas decidi ir um pouco além, replicando e ajustando o [projeto Ecommerce](https://github.com/Braz99/Ecommerce), utilizando o conceito de context api e a biblioteca [Totastify](https://github.com/fkhadra/react-toastify).

## Instalação
Você vai precisar ter instalado em sua máquina:

[GIT](https://git-scm.com)

[Node.js](https://nodejs.org/en/). 

E também de um editor de código, de preferência o [VSCode](https://code.visualstudio.com/)

### Passos

- Primeiro clone o projeto, use o terminal git bash, com o comando <code>git clone https://github.com/Braz99/Ecommerce2.git</code>
- Depois abra a pasta no terminal usando o comando <code> cd caminho da pasta</code>
- Com a pasta selecionada é hora de instalar todas as dependências do projeto com o comando <code>npm install</code>
- Para executar a aplicação em modo de desenvolvimento use o comando <code>npm start</code>

 O servidor inciará na porta:3000 - acesse http://localhost:3000
 
 ## Estruturação do projeto
 
 Este projeto tem 4 páginas, encontradas na pasta src/pages, que são as seguintes: 
 
 - Home: Com os componentes Header, MarineFriday, e HomeMain; 
 - MarineFriday: Com o componente MarineFridayMain;
 - Cart: Com os componentes Header, CartMain e Total;
 - EndStop: Sem componentes, por ser apenas uma mensagem ao cliente.

### Informações 
- As rotas se encontram no arquivo __routes.js__, dentro de __src__;
- Na pasta __src/api__ está a database do projeto, __products.json__, que nada mais é que a lista de produtos;
- As imagens se encontram na pasta __public/assets__
- Todos os componentes se encontram na pasta __src/components__;
- Toda a lógica do projeto se encontra na pasta __src/logic_app__ e em alguns componentes, já mencionados;
- Todo o estilo do projeto se encontra na pasta __src/components/styles__, com exceção do __style_global__(apenas margin e padding zerados).

## Licença 
License MIT

## Autor 
Fabrício Brazil
