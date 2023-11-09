const express = require('express');
const router = express.Router();

const autenticacaoController = require('../controller/autenticacaoController');

router.post('/autenticar', autenticacaoController.autenticar);
router.get('/sair', autenticacaoController.sair);

module.exports = router;