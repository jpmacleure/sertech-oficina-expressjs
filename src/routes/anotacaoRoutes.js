const express = require('express');
const router = express.Router();

const anotacaoController = require('../controller/anotacaoController');
const autenticacaoController = require('../controller/autenticacaoController');

router.get('/', anotacaoController.indexView);
router.get('/home', autenticacaoController.verificarAutenticacao, anotacaoController.homeView);
router.post('/cadastrar_anotacao', autenticacaoController.verificarAutenticacao, anotacaoController.cadastrarAnotacao)

module.exports = router;