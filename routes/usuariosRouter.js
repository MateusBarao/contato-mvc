const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosController');
const validateUserRegister = require('../middlewares/validacaoRegistro');

router.get('/registrar', usuariosController.showRegistrar);
router.post('/usuarios', validateUserRegister, usuariosController.store)
router.get('/login', usuariosController.mostrarLogin);
router.post('/login', usuariosController.login);

module.exports = router;