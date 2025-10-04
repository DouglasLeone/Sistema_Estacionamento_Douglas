import { Veiculo } from "../src/models/Veiculo";
import { Registro } from "../src/models/Registro";

// Classe do Estacionamento

export class Estacionamento {
    registros : Array<Registro> = [];
    precoInicial : number
    precoHora : number

    constructor(precoInicial : number, precoHora : number) {
        this.precoInicial = precoInicial;
        this.precoHora = precoHora;
    }

    cadastrarVeiculo(placa : string, modelo : string, cor : string) {
        let veiculo = new Veiculo(placa, modelo, cor);
        let registro = new Registro(veiculo);

        registro.registrarEntrada();
        this.registros.push(registro);
        alert(`
            Novo Veículo Cadastrado:
            Modelo: ${veiculo.modelo}
            Placa: ${veiculo.placa}
            Cor: ${veiculo.cor}`);
    }

    removerVeiculo(placa : string) : void {
        let registro = this.registros.find(function(r) {
            return r.veiculo.placa === placa;
        })

        if (!registro) {
            alert("Veículo não encontrado!");
            return;
        }

        let valorPagar = registro.registrarSaida(this.precoInicial, this.precoHora);
        this.registros = this.registros.filter(function(r) {
            return r !== registro;;
        })

        alert(`
            Veículo ${placa} removido.
            Valor a Pagar: R$ ${valorPagar.toFixed(2)}`);
    }

    listarVeiculos() : void {
        if (this.registros.length === 0) {
            alert("Nenhum veículo cadastrado no momento!");
            return;
        }

        let listaVeiculos = "Veiculos Estacionados\n\n";
        this.registros.forEach(r => {
            listaVeiculos += `- ${r.veiculo.modelo}, ${r.veiculo.placa}, ${r.veiculo.cor}`;
        });

        alert(listaVeiculos);
    }
}