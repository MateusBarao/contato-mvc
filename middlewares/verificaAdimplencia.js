//para efeitos de teste iremos super que o usuário é o de id 1

const uid = 3;

module.exports = (req, res, next) => {
    let usuarios = require('../database/usuarios.json');

    const usuario = usuarios.find (u => u.id == uid); 

    if (usuario.adimplente == true) {
        next();
    } else {
        res.send ('Favor entrar em contato com o setor financeiro.');
    }

    
}