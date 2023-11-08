const Anotacao = require('../model/anotacao');

function indexView(req, res) {
    res.render('index.html');
}

function homeView(req, res) {

    Anotacao.findAll({
        where: {
            id_usuario: req.session.usuario.id,
            indicador_ativo: 1
        }
    }).then((anotacaos)=>{
        res.render('home.html', {anotacaos});
    }).catch((erro_recupera_anotacaos)=>{
        res.render('home.html', {erro_recupera_anotacaos});
    });

    
}

function cadastrarAnotacao(req, res) {
    let anotacao = {
        titulo: req.body.titulo,
        id_usuario: req.session.usuario.id,
        subtitulo: req.body.subtitulo,
        texto: req.body.texto,
        indicador_ativo: 1,
        estilo: req.body.estilo
    }
    
    Anotacao.create(anotacao).then(()=>{
        res.redirect('/home');
    }).catch((err)=>{
        console.log(err);
        let erro_cadastrar_anotacao = true;
        res.render("home.html", {erro_cadastrar_anotacao});
    });

}

module.exports = {
    indexView,
    homeView,
    cadastrarAnotacao
}