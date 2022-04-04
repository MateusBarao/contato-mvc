// importar o express

const express = require('express');
const verificaAdimplencia = require('../middlewares/verificaAdimplencia');

// importar o controller

const contatosController = require('../controllers/contatosController');
const { VERSION } = require('ejs');

// criar o roteador

const router = express.Router();

// pede para o roteador definir uma rota: (método: get, endereço: /contatos)

router.get('/contatos', verificaAdimplencia, contatosController.listarContatos);
router.get('/contatos/:id', verificaAdimplencia,  contatosController.capturarContato)

// exportar o roteador

module.exports = router;