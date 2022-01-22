const fs = require('fs');
const logger = require('../logger/logger');

class Whatsapp{
    constructor(file){
        this.erros = [],
        this.file = file       
    }
    envio_mensagem_via_importacao_excel(){
        var envio_mensagem_via_importacao = [];
      fs.readFile(this.file.path, 'utf8', function(err, data){
           if(err) {
               logger.error(err);
               return;
           }else{
                var a = data.split('\r\n');
                a.forEach(row => {
                    var arr = row.split(';');                  
                 envio_mensagem_via_importacao.push({'id_empresa': arr[0], 'valor': arr[1], 'cliente': arr[2], 'telefone': arr[3], 'empresa': arr[4]});
                })
           }
          console.log(envio_mensagem_via_importacao)
           return envio_mensagem_via_importacao;
           
       });
      
    }    
}

module.exports = Whatsapp;