const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.get('/registrar', usuariosController.showRegistrar);
router.post('/usuarios', usuariosController.store);

module.exports = router;