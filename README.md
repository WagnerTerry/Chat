NLW 5 BACK COM NODE

dependências

- yarn init -y
- yarn add express
- yarn add @types/express -D
- yarn add typescript -D // -D ambiente de desenvolvimento
- yarn tsc --init
- yarn add typeorm reflect-metadata
- yarn add sqlite3
- yarn add uuid
- yarn add @types/uuid -D

tsconfig.json {
"strict": false // verificação a mais, nao verifica em desenvolvimento
}

- yarn add ts-node-dev -D

"scripts": {
"dev": "ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts",
"typeorm": "ts-node-dev node_modules/typeorm/cli.js"
},

configurar um json para o typeorm - que trata do banco de dados

- ormconfig.json

- criando migrations
  yarn typeorm migration:create -n CreateSettings
- rodar migration com a QueryRunner ( criação de tabelas )
  yarn typeorm migration:run

tsconfig.json{
"strictPropertyInitialization": false,
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
}
