let verificaSeLogado = (req, res, next) => {
    if(req.session.usuario == undefined){
        res.redirect('/login');
    } else {
        req.usuario = req.session.usuario;

        next();
    }
}

module.exports = verificaSeLogado;