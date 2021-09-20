# Luizalabs | Magalu
## Teste Frontend | Descrição do Projeto

Uma das funcionalidades mais interessantes em um e-commerce é a Wishlist, ou a lista de desejos. No e-commerce o cliente pode realizar a busca de produtos, ou pode acessar a tela de detalhes do produto. Em ambas as telas ele pode selecionar os produtos de sua preferência e armazená-los na sua Wishlist. A qualquer momento o cliente pode visualizar sua Wishlist completa, com todos os produtos que ele selecionou em uma única tela.

Para este projeto optei por desenvolver utilizando as seguintes premissas:
 - Salvar informações de wishlist no `localStorage` do navegador;
 - Flexbox;
 - Utilizado o breakpoints de 768px para definições de estilos de acordo com o tamanho de tala a acessar a aplicação.

## Stack

|       Ferramentas       | Descrição                             |
| :---------------------: | ------------------------------------- |
|        **Node.js**        | https://nodejs.org/                 |
|        **Express**        | https://expressjs.com/              |
|        **Axios**        | https://www.npmjs.com/package/axios   |
|        **Jade**        | https://jade-lang.com/.                |
|        **Sass**        | https://sass-lang.com/.                |

## Rodando o projeto localmente

1. Clone o projeto `git clone git@github.com:tidias17/luizalabs.git` em um diretório de sua preferência;
2. No diretório principal do projeto, para instalar as dependências listadas em package.json, deverá ser executado o comando `npm i`;
3. Para iniciar a aplicação, é necessário que no diretório principal deste repositório, execute o comando `npm start`. Este será disponibilizado na rota http://localhost:3000.

## Client

Para o client deste projeto, foram disponibilizados duas rotas:
 - `/` Onde é exibido a lista de produtos;
  - `/wishlist` Onde será exibidos os produtos da lista de desejos, caso já tenha sido marcado anteriormente.

## Bff

Como as informações de wishlist estão sendo guardadas no `localstorage` do navegador, foi implementado apenas uma rota no bff, para consumo de informações externas, `/api/products-line`.
