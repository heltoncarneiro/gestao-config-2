const express = require('express');
const app = express();
const port = 8000;
const films = require('./routers/filmes.js');

app.use('/api/filmes', films);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:8000`);
});