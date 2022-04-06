const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/registrar', usuariosController.showRegistrar);
router.get('/login', usuariosController.mostrarLogin);
router.post('/login', usuariosController.login);
router.post('/usuarios', usuariosController.store);

module.exports = router;