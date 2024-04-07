import EnumConsumoElegivel from "../enum/EnumConsumoElegivel"
import EnumTarifaElegivel from "../enum/EnumTarifaElegivel"

export function razoesDeInelegibilidade(tipoConsumo: EnumConsumoElegivel, bandeiraTarifa: EnumTarifaElegivel): any[] {
    let resultado: any[] = []
    let obsInelegibilidade: any[] = []

    let consumoInelegibilidade: string = ''
    let tarifaInelegibilidade: string = ''

    //analisa classeConsumo
    const classeConsumo = (!Object.values(EnumConsumoElegivel).includes(tipoConsumo)) ? false : true
    resultado.push(classeConsumo)
    consumoInelegibilidade = resultado[0] === false ? 'Classe de consumo não aceita' : ''

    //analisa  classeTarifa
    const classeTarifa = (!Object.values(EnumTarifaElegivel).includes(bandeiraTarifa)) ? false : true
    resultado.push(classeTarifa)
    tarifaInelegibilidade = resultado[0] === false ? 'Modalidade tarifária não aceita' : ''

    //Monta observação sobre o porque da Inelegilidade
    obsInelegibilidade.push(consumoInelegibilidade)
    obsInelegibilidade.push(tarifaInelegibilidade)

    resultado.push(obsInelegibilidade)

    return resultado
}