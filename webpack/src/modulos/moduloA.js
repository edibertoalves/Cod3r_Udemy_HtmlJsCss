const moduloB = require('./moduloB');

function mensagem(){
    return moduloB.saudacao;
}

module.exports.MensagemModuloA = mensagem();
