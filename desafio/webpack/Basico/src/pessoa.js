import moduloA from "./modulos/moduloA";


export default class Pessoa {
    cumprimentar(){
        
        const h = moduloA.MensagemSimples;

        return 'bom dia' + h;
    }
}