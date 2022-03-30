const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/registrar', usuariosController.showRegistrar);

module.exports = router;