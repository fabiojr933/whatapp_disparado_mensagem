const fs = require('fs');
const logger = require('../logger/logger');

async function envio_mensagem_via_importacao_excel(path) {
  var envio_mensagem_via_importacao = [];
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      var a = data.split('\r\n');
      a.forEach(row => {
        var arr = row.split(';');
        envio_mensagem_via_importacao.push({ 'id_empresa': arr[0], 'valor': arr[1], 'cliente': arr[2], 'telefone': arr[3], 'empresa': arr[4] });
      })
      resolve(envio_mensagem_via_importacao);
    });
  });
}

module.exports = {
  envio_mensagem_via_importacao_excel
};