//Importar bibliotecas
const express = require("express");
const app = express();

//middlware
app.use(express.json());

//Mala práctica
app.get("/test", (request, response) => {
  console.log("Esto no se debe de hacer, pero se funciona");
  response.send("<h1>Servidor funcionando</h1>");
});

//levantar el server y escuchar peticiones
app.listen(8080, () => {
  console, console.log("Servidor escuchando ⭐️");
});
