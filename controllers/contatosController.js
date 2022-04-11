module.exports = {
    listarContatos: (req, res)=>{
        let contatos = require(`../database/contatos_${req.usuario.id}.json`);
        res.render('home.ejs', {
            contatos: contatos
        });
    },

    capturarContato: (req, res) => { 
        let contatos = require(`../database/contatos_${req.usuario.id}.json`);

        // descobrir qual id o usuário quer

        let idDoContato = req.params.id;

        // encontrar no array de contatos aquele que tem o id desejado

        let contato = contatos.find(
            (c) => {
                return c.id == idDoContato;
            });
            
        // enviando informação pro usuário ou mensagem de erro caso não exista o contato
        if (contato === undefined) {
            res.send ("contato não existe");
        } else {
        res.send (contato);
        }
    }
};
