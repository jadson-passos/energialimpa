### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [POSTMAN](https://www.postman.com/). 

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/jadson-passos/energialimpa>

# Acesse a pasta do projeto no terminal/cmd
$ cd energialimpa


# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>

# Execute os testes unitários 
$ npm run test

# Serviço para validar elegibilidade de clientes - acesse via Postman (verbo POST) <http://localhost:3333/api/novoCliente>
## Payload de entrada para [cliente Elegível e cliente Não Elegível]

```json
{
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
    3878, // mes atual
    9760, // mes anterior
    5976, // 2 meses atras
    2797, // 3 meses atras
    2481, // 4 meses atras
    5731, // 5 meses atras
    7538, // 6 meses atras
    4392, // 7 meses atras
    7859, // 8 meses atras
    4160, // 9 meses atras
    6941, // 10 meses atras
    4597  // 11 meses atras
  ]
}



{
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "rural",
  "modalidadeTarifaria": "verde",
  "historicoDeConsumo": [
    3878, // mes atual
    9760, // mes anterior
    5976, // 2 meses atras
    2797, // 3 meses atras
    2481, // 4 meses atras
    5731, // 5 meses atras
    7538, // 6 meses atras
    4392, // 7 meses atras
    7859, // 8 meses atras
    4160 // 9 meses atras
  ]
}

```
