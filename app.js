// importar o express

const express = require('express');

// importar os roteadores

const contatosRouter = require ('./routes/ContatosRouter');

// criar um servidor

const servidor = express();

// criar uma rota get no endereço '/' para responder a requisição com a mensagem olá

servidor.get('/', (req, res)=>{
    res.send("Olá");
});

// usando os roteadores

servidor.use('/', contatosRouter);

// rodar a aplicação

servidor.listen(3000, ()=>{
    console.log("escutando na porta 3000")
});