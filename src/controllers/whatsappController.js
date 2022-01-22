const express = require('express');
const route = express.Router();
const upload = require('../middlewares/upload');
const Whatsapp = require('../models/WhatsappModel');


// envio
route.post('/whatsapp/envio_mensagem_via_importacao', upload.single('arquivo'), (req, res) => {
    var mensagem = req.body.mensagem;   
    var whatsapp = new Whatsapp(req.file);    

    whatsapp.envio_mensagem_via_importacao_excel().then(data => {
        console.log(data);
    })




});
module.exports = route;
