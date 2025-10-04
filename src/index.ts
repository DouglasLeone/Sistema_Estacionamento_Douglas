import { Veiculo } from "./models/Veiculo";
import { Estacionamento } from "../services/Estacionamento";

let estacionamento = new Estacionamento(5, 2);

function menu() {
    let opcao = prompt(
        "Escolha uma opção:\n" +
        "0 - Cadastrar Veículo\n" +
        "1 - Remover Veículo\n" +
        "2 - Listar Veículos\n" +
        "3 - Encerrar Programa"
    );

    if (opcao == null || opcao == "3") {
        alert("Programa Encerrado!")
        return;
    }

    switch(opcao) {
        case "0":
            let placa = prompt("Digite a placa do veículo:")?.toUpperCase();
            let modelo = prompt("Digite o modelo do veículo:")?.toUpperCase();
            let cor = prompt("Digite a cor do veículo:")?.toUpperCase();

            if (placa && modelo && cor) {
                estacionamento.cadastrarVeiculo(placa, modelo, cor);
            } else {
                alert("Dados incompletos! Preencha os campos corretamente.");
            }
            break;
        
        case "1":
            let placaRemover = prompt("Digite a placa do veículo para remover:")?.toUpperCase();
            if (placaRemover) {
                estacionamento.removerVeiculo(placaRemover);
            } else {
                alert("Placa Inválida!");
            }
            break;
        
        case "2":
            estacionamento.listarVeiculos();
            break;
        
        default:
            alert("Opção Inválida!");
    }

    menu();
}

menu();