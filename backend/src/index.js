const express = require('express');
const cors = require('cors'); // Responsável pela Segurança da Aplicação 
const routes = require('./routes'); // Utiliza ./ para dizer que não é um pacote e sim um arquivo


const app = express();

app.use(cors(/*{origin: 'http:/meuapp.com'}*/));//preencher com o endereço que o app front estiver instalado.
app.use(express.json()) // Deve vir antes das rotas para dizer que o app vai utilizar Json
app.use(routes);


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * GET: quando quiser buscar uma informação do Back-end
 * POST: Criar uma informação no Back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar um informação no back-end.
 */

/**
 * Tipos de parâmetros:
 * 
 * Query: Parametros nomeados enviados na rota após o "?" (filtros, paginação)Ex: ?name=Diego
 * Router Params: Parâmetros usados para indenticar recursos. Ex: /usesr/1 (apenas usários com ID 1)
 * Request Body: Corpo da Requisução. Utilizado para criar ou alaterar recursos.
 * 
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, MariaDB
 * 
 * npx next init (Inicializa o pacote) cira o arquivo na raiz do projeto knexfile.js
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table("users").select('*').where()
 */

app.listen(3333);