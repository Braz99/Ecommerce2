# Loja Marine
### Link do projeto: https://lojamarine.netlify.app/
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
 
 ## Estrutura do projeto
 
 Este projeto tem 4 páginas, encontradas na pasta __src/pages__, que são as seguintes: 
 
 - Home com os componentes: Header, MarineFriday, e MainHome; 
 - MarineFriday com o componente: MarineFridayMain;
 - Cart com os componentes: Header, CartMain e TotalCart;
 - EndStop: Sem componentes, por ser apenas uma mensagem ao cliente.

### Informações 
- As rotas se encontram no arquivo __routes.js__, dentro de __src__;
- Na pasta __src/api__ está a database do projeto, __products.json__, que nada mais é que a lista de produtos;
- As imagens se encontram na pasta __public/assets__
- Todos os componentes se encontram na pasta __src/components__;
- Toda a lógica do projeto foi isolada em hooks personalizados, e se encontra na pasta __src/hooks__ ;
- Dentro de __provider/cart.js__ está a lógica da ContextAPI, fornecendo para a aplicação os dados do cart e o setCart;
- Todo o estilo do projeto se encontra na pasta __src/styles__, estando os estilos dos componentes na pasta __components_styles__.



## Licença 
License MIT

## Autor 
Fabrício Brazil
