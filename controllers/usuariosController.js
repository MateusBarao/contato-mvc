let usuarios = require('../database/usuarios.json');

const bcrypt = require('bcrypt');

const fs = require('fs');

const path = require('path');

module.exports = {
    showRegistrar: (req, res) => {
        res.render ('registro.ejs');
    },

    store: (req, res) => {
        let {nome, email, senha} = req.body;

        let idNovo = usuarios[usuarios.length - 1].id + 1;

        let senhaCriptografada = bcrypt.hashSync(senha, 10);

        let usuario = {
            "id": idNovo,
            "nome": nome,
            "email": email,
            "senha": senhaCriptografada
        }

        usuarios.push(usuario);

        fs.writeFileSync(path.join(__dirname, '/../database/usuarios.json'), JSON.stringify(usuarios, null, 4));

        res.redirect('/contatos');
    }
}
