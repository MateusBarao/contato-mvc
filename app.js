// importar o express

const express = require('express');
const { append } = require('express/lib/response');

// importar os roteadores

const contatosRouter = require ('./routes/ContatosRouter');
const usuariosRouter = require ('./routes/usuariosRouter');

// importar os middlewares
const marcaEntradaRequisicao = require ('./middlewares/marcaEntradaRequisicao');

// criar um servidor

const servidor = express();

//configurar o ejs

servidor.set('view engine', 'ejs');

servidor.use(express.urlencoded({  extended: false  }));

servidor.use(express.static('public'));

servidor.use(marcaEntradaRequisicao);

// criar uma rota get no endereço '/' para responder a requisição com a mensagem olá

servidor.get('/', (req, res)=>{
    res.send("Olá");
});

// usando os roteadores

servidor.use('/', usuariosRouter);
servidor.use('/', contatosRouter);

// rodar a aplicação

servidor.listen(3000, ()=>{
    console.log("escutando na porta 3000")
});