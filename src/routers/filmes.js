const express = require('express');
const router = express.Router();

const filmes = [
  { id: 1, titulo: "O Senhor dos Anéis: A Sociedade do Anel", genero: "Fantasia" },
  { id: 2, titulo: "Interestelar", genero: "Ficção Científica" },
  { id: 3, titulo: "Pulp Fiction: Tempo de Violência", genero: "Crime" }
];
router.get('/', (req, res) => {
  console.log('Requisição recebida para /api/filmes/');
  res.json(filmes);
});
module.exports = router;