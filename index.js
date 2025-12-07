const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Aplicación lista para Desarrollo de Software Global");
});

app.listen(3000, () => {
  console.log("Servidor iniciado en puerto 3000");
});
