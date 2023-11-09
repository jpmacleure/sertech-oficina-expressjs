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
    }).catch((erro_recuperar_anotacaos)=>{
        res.render('home.html', {erro_recuperar_anotacaos});
    })

}

function cadastrarAnotacao(req, res) {
    
    let anotacao = {
        id_usuario: req.session.usuario.id,
        titulo: req.body.titulo,
        subtitulo: req.body.subtitulo,
        texto: req.body.texto,
        estilo: req.body.estilo,
        indicador_ativo: 1
    }

    Anotacao.create(anotacao).then(()=>{
        let sucesso = true;
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