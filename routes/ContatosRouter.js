// importar o express

const express = require('express');
const verificaAdimplencia = require('../middlewares/verificaAdimplencia');

// importar o controller

const contatosController = require('../controllers/contatosController');
const { VERSION } = require('ejs');
const verificaSeLogado = require('../middlewares/verificaSeLogado');

// criar o roteador

const router = express.Router();

// pede para o roteador definir uma rota: (método: get, endereço: /contatos)

router.get('/contatos', verificaSeLogado, verificaAdimplencia, contatosController.listarContatos);
router.get('/contatos/:id', verificaSeLogado, verificaAdimplencia,  contatosController.capturarContato)

// exportar o roteador

module.exports = router;