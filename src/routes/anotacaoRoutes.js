const express = require('express');
const router = express.Router();

const anotacaoController = require('../controller/anotacaoController');

router.get('/', anotacaoController.indexView);
router.get('/home', anotacaoController.homeView);

module.exports = router;