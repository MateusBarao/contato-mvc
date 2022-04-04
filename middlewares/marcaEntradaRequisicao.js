const fs = require('fs');

module.exports = (req, res, next) => {
    let dataAtual = (new Date()).toISOString();

    console.log(dataAtual);

    fs.appendFileSync('dataAcesso.txt', (dataAtual + "\n"));

    next();
    
    console.log('saindo do middleware');
}