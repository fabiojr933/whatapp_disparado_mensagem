const fs = require('fs');
const logger = require('../logger/logger');
const axios = require('axios');

async function ler_arquivo01_excel(path) {
  var ler_arquivo01 = [];
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      var a = data.split('\r\n');
      a.forEach(row => {
        var arr = row.split(';');
        ler_arquivo01.push({ 'cliente': arr[0], 'telefone': arr[1], 'cnpj_cpf': arr[2], 'empresa': arr[3]});
      })
      ler_arquivo01 = ler_arquivo01.filter((element, index) => index < ler_arquivo01.length - 1);
      ler_arquivo01.splice(0,1)   
      resolve(ler_arquivo01);
    });
  });
}

async function enviar_arquivo01_excel(dados, user, mensagem){  
  dados.forEach(element => {
    try {
      var data = {
        'session': user.session,
        'number': '55' + element.telefone,
        'text': element.cliente + ' ' + mensagem + ' ' + element.empresa
      }
      var config = {
        method: 'POST',
        url: user.servidor + '/sendText',
        headers: {
          'Content-Type': 'application/json',
          'sessionkey': user.session
        },
        data: JSON.stringify(data)
      };
      axios(config).then(response => {
        if (response.data.result != 200) {         
          res.redirect('/');
        }
      }).catch(err => {
        logger.error(err);      
      });     
    } catch (error) {
      logger.error(error);
    }   
  });         
}

module.exports = {
  ler_arquivo01_excel,
  enviar_arquivo01_excel
};