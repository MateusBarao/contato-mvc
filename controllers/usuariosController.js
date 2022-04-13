const path = require('path');
const fs = require('fs');
const usuarios = require('../database/usuarios.json');
const bcrypt = require('bcrypt');
const { check, validationResult, body} = require('express-validator');

module.exports = {
    showRegistrar: (req, res) => {
        res.render ('registro.ejs');
    },

    store: (req, res) => {

        let errors = validationResult(req);
        
        console.log(errors.mapped());

        if (errors.isEmpty()) {        
            let {nome, email, senha, confirmar} = req.body;

            let idNovo = usuarios[usuarios.length - 1].id + 1;

            let senhaCriptografada = bcrypt.hashSync(senha, 10);

            let novoUsuario = {
            "id": idNovo,
            "nome": nome,
            "email": email,
            "senha": senhaCriptografada,
            "adimplente": true
            }

            usuarios.push(novoUsuario);

            fs.writeFileSync(path.join(__dirname, '/../database/usuarios.json'), JSON.stringify(usuarios, null, 4));

            res.redirect('/login');
        
            } else {
                res.render('registro.ejs', {errors: errors.mapped(), old: req.body});
            }        
    },
 
    mostrarLogin: (req, res) => {
        res.render('login.ejs');
    },

    login: (req, res) => {
        //extrair o login e a senha digitadas pelo usuário
        let {email, senha} = req.body;

        /**
         * Equivale a:
         * let email = req.body.email;
         * let senha = req.body.senha;
         */

        //carregar o meu array de usuários(ja ta carregado la em cima) 

        //verificar se o usuário existe no sistema
        let usuario = usuarios.find( 
            u => u.email == email && bcrypt.compareSync(senha, u.senha) );
         //       if(u.email == email && bcrypt.compareSync(senha, u.senha)) 
         //           return true;
        //        } else {
         //           return false;
         //   }
      

        //se o usuário não for encontrado, ou a senha for inválida, retornar mensagem de erro

        if (usuario === undefined){
            return res.render('login.ejs', {errors: "Usuário não foi encontrado", old: req.body}); 
        }
        
        if (!bcrypt.compareSync(senha, u.senha)){
            res.render('login', {errors: "Senha incorreta"})
        }
        //se o usuário existir, criar a session do usuário e redirecioná-lo para a tela que lista os contatos

        req.session.usuario = usuario;
        res.redirect('/contatos');

    }
}
