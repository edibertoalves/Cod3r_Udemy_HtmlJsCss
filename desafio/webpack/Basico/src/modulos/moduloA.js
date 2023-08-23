const moduloB = require('./moduloB');

function mensagem() {
    return ` ${moduloB.MensagemHi} WebPack`;
}


exports.MensagemSimples = mensagem();


// export default class HelloWorld{
//     digaHello(){
//         return ' teste HELLO WORLD';
//     }
// }