module.exports = (req, res, next) => {
    let usuarios = require('../database/usuarios.json');

    const usuario = usuarios.find (u => u.id == req.usuario.id); 

    if (usuario.adimplente == true) {
        next();
    } else {
        res.send ('Favor entrar em contato com o setor financeiro.');
    }

    
}