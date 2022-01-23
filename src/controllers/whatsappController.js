const express = require('express');
const route = express.Router();
const upload = require('../middlewares/upload');
const logger = require('../logger/logger');
const Whatsapp = require('../models/WhatsappModel');


// envio
route.post('/whatsapp/envio_mensagem_via_importacao', upload.single('arquivo'), async (req, res) => {
    var mensagem = req.body.mensagem;

    try {
        var data = await Whatsapp.envio_mensagem_via_importacao_excel(req.file.path);
        console.log(data);
    } catch (error) {
        logger.error(error);
    }

});
module.exports = route;
