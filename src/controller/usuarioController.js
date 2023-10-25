const Usuario = require('../model/usuario');

function cadastrarUsuario(req, res) {
    let usuario = {
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento
    }
    
    Usuario.create(usuario).then(()=>{
        let sucesso = true;
        res.render("index.html", {sucesso});
    }).catch((err)=>{
        console.log(err);
        let erro = true;
        res.render("index.html", {erro});
    });

}

function listarUsuarios(req, res) {
    Usuario.findAll().then((usuarios)=>{
        res.json(usuarios);
    }).catch((err)=>{
        res.json(err);
    });
}

module.exports = {
    cadastrarUsuario,
    listarUsuarios
}