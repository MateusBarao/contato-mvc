// importar o express

const express = require('express');

// importar o controller

const contatosController = require('../controllers/contatosController');

// criar o roteador

const router = express.Router();

// pede para o roteador definir uma rota: (método: get, endereço: /contatos)

router.get('/contatos', contatosController.listarContatos);

// exportar o roteador

module.exports = router;