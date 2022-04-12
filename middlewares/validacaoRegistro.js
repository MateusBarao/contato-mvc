const { check, body } = require('express-validator');

const validateUserRegister = [
    check('nome')
        .notEmpty().withMessage("Por favor insira um nome")
        .isLength({min: 3, max: 150}).withMessage("O nome deve conter ao menos 3 caracteres"),
    check('email')
        .notEmpty().withMessage("Por favor insira um e-mail")
        .isEmail().withMessage("Por favor insira um e-mail válido"),
    check('senha')
        .notEmpty().withMessage("Por Favor insira uma senha")
        .isLength({min: 3, max: 32}).withMessage("A senha deve conter ao menos 3 caracters")
]

module.exports = validateUserRegister;