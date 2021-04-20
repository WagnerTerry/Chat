NLW 5 BACK COM NODE

dependências

- yarn init -y
- yarn add express
- yarn add @types/express -D
- yarn add typescript -D // -D ambiente de desenvolvimento
- yarn tsc --init

tsconfig.json {
"strict": false // verificação a mais, nao verifica em desenvolvimento
}

- yarn add ts-node-dev -D

"scripts": {
"dev": "ts-node-dev src/server.ts"
},
