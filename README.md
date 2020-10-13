# Test LinkApi

## Requisitos

  1. Node.js (LTS) Version: 12.12.0 (includes npm 6.14.4)
     * https://nodejs.org/en/download/
  1. Mongo (Conta Cloud Free)
     * https://www.mongodb.com/
  1. Conta PipeDrive
     * https://www.pipedrive.com
  1. Conta Bling
     * https://www.bling.com.br
     
     
## Instruções de inicialização da api

- Execute na raiz do projeto
  >  `npm start` 
- Rotas
  - <localhost:8000/bling/insert-ordered> insere no bling novas negociações que estão salvas no mongo
  - <localhost:8000/pipe-drive/search-all-negotiation> - busca novas negociações "ganhas" e salva no mongo
  - <localhost:8000/orders/reports> - Exibe um consolidado dos valores das negociações
  - <localhost:8000/orders> - Exibe um listado de negociações

## Variáveis [(.env)](.env)

* APP_NAME=test-linkapi
* DEVELOPMENT=off
* DOMAIN=localhost
* PORT=8000

1. Mongo *variaveis de conexão*
    * MONGO_URI=
    * MONGO_USERNAME=
    * MONGO_PASSWORD=
    * MONGO_DATABASE=

1. pipeDrive *Credenciais e URL da api*
    * PIPEDRIVE_BASE_URL=
    * PIPEDRIVE_KEY=

1. Bling *Credenciais e URL da api*
    * BLING_URL=
    * BLING_KEY=