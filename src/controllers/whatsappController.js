const express = require('express');
const route = express.Router();
const upload = require('../middlewares/upload');
const logger = require('../logger/logger');
const Whatsapp = require('../models/WhatsappModel');
const loginController = require('./loginController');
const middleware = require('../middlewares/middleware');


// envio
route.post('/whatsapp/envio_mensagem_via_importacao', middleware.autenticacao, upload.single('arquivo'), async (req, res) => {
    var mensagem = req.body.mensagem; 
    var users = req.session.user;
    try {
        var dados = await Whatsapp.ler_arquivo01_excel(req.file.path);       
        await Whatsapp.enviar_arquivo01_excel(dados, users, mensagem);     
        req.flash('sucesso', 'Mensagem esta sendo enviado para seus clientes');
        req.session.save(() => res.redirect('/whatsapp/mensagem_via_importacao'));
        return;
    } catch (error) {
        logger.error(error);
    }

});
module.exports = route;
