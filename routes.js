const express = require('express');
const route = express.Router();
const middleware = require('./src/middlewares/middleware');
const whatsapp2Controller = require('./src/controllers/whatsapp_get_Controller');
const homeController = require('./src/controllers/homeController');

// Rota home
route.get('/', homeController.home);

// Whatsapp 
route.get('/whatsapp/mensagem_comum', whatsapp2Controller.mensagem_comum);
route.get('/whatsapp/mensagem_via_importacao', whatsapp2Controller.mensagem_via_importacao);
route.get('/whatsapp/mensagem_via_imagem', whatsapp2Controller.mensagem_via_imagem);
route.get('/whatsapp/mensagem_via_contatos', whatsapp2Controller.mensagem_via_contatos);




module.exports = route;
