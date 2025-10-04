// Classe do Registro
import { Veiculo } from "./Veiculo";

export class Registro {
    veiculo : Veiculo;
    entrada! : Date;
    saida! : Date;
    tempoPermanencia! : number;
    valorPago! : number;

    constructor(veiculo : Veiculo) {
        this.veiculo =  veiculo;
    }

    registrarEntrada() : void {
        this.entrada = new Date();
    }

    registrarSaida(precoInicial : number, precoHora : number) : number {
        this.saida = new Date();
        let tempo = this.saida.getTime() - this.entrada.getTime();
        let tempoHoras = Math.ceil(tempo / (1000 * 60 * 60));
        this.tempoPermanencia = tempoHoras;
        this.valorPago = precoInicial + (tempoHoras * precoHora);
        
        return this.valorPago;
    }
}