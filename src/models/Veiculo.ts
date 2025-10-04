// Classe do Veículo
export class Veiculo {
    placa : string
    modelo : string
    cor : string

    constructor(placa: string, modelo: string, cor: string) {
        this.placa = placa
        this.modelo = modelo
        this.cor = cor
    }
}