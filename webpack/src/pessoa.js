//module.exports = 

import moduloA from './modulos/moduloA';


export default class Pessoa {
    cumprimentar(){
        return "Bom Dia" + moduloA.MensagemModuloA;
    }
}