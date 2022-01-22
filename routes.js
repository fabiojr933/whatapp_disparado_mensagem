const express = require('express');
const route = express.Router();
const middleware = require('./src/middlewares/middleware');
const whatsapp2Controller = require('./src/controllers/whatsapp_get_Controller');
const loginController = require('./src/controllers/loginController');
const homeController = require('./src/controllers/homeController');

// Rota home
route.get('/', homeController.home);


// login
route.get('/login/index', loginController.login);
route.post('/login/authenticate', loginController.authenticate);
route.get('/login/logoof', loginController.logoof);

// Whatsapp 
route.get('/whatsapp/mensagem_comum', middleware.autenticacao, whatsapp2Controller.mensagem_comum);
route.get('/whatsapp/mensagem_via_importacao', middleware.autenticacao, whatsapp2Controller.mensagem_via_importacao);
route.get('/whatsapp/mensagem_via_imagem', middleware.autenticacao, whatsapp2Controller.mensagem_via_imagem);
route.get('/whatsapp/mensagem_via_contatos', middleware.autenticacao, whatsapp2Controller.mensagem_via_contatos);

// Sessão
route.get('/whatsapp/sessao', middleware.autenticacao, whatsapp2Controller.sessao);




module.exports = route;
