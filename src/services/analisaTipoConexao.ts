import EnumRazoesDeInelegibilidade from "../enum/EnumRazoesDeInelegibilidade"

export function analisaTipoConexao(tipoConexao: string, mediaConsumo: number): any[] {

    let consumoElegivel: boolean = false
    let consumoBaixo: string = ''
    let resultado: any[] = []


    if (tipoConexao === 'monofasico') {
        consumoElegivel = mediaConsumo >= 400 ? true : false
        resultado.push(consumoElegivel)
        consumoBaixo = mediaConsumo < 400 ? EnumRazoesDeInelegibilidade.CONSUMO_MUITO_BAIXO_PARA_TIPO_DE_CONEXAO : ''
        resultado.push(consumoBaixo)
    }
    if (tipoConexao === 'bifasico') {
        consumoElegivel = mediaConsumo >= 500 ? true : false
        resultado.push(consumoElegivel)
        consumoBaixo = mediaConsumo < 500 ? EnumRazoesDeInelegibilidade.CONSUMO_MUITO_BAIXO_PARA_TIPO_DE_CONEXAO : ''
        resultado.push(consumoBaixo)
    }
    if (tipoConexao === 'trifasico') {
        consumoElegivel = mediaConsumo >= 750 ? true : false
        resultado.push(consumoElegivel)
        consumoBaixo = mediaConsumo < 750 ? EnumRazoesDeInelegibilidade.CONSUMO_MUITO_BAIXO_PARA_TIPO_DE_CONEXAO : ''
        resultado.push(consumoBaixo)
    }


    return resultado
}