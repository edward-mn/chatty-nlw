// ... significa que é necessário fazer a instalação da tipagem - yarn add @types/nome_biblioteca -D (-D = ambiente Dev)
import express from 'express'; 

import "./database/";
import { routes } from "./routes";

const app = express();

/* 
 - GET = Buscas
 - POST = Criação
 - PUT = Alteração
 - PATCH = Alterar uma informação específica
 - DELETE = Deletar

// Podemos utilizar a mesma rota por conta dos métodos HTTP
app.get('/', (req, res) => {
  //return res.send("Olá NLW 05");
  return res.json({
    message: "Olá NLW 05"
  });
});

app.post('/', (req, res) => {
  return res.json({message: "Usuário salvo com sucesso!"});
});

*/

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})

// yarn tsc --init (Arquivo de config TS)
// Day 1 Code - missaoespacial
// Day 2 Code - embuscadoproximonivel