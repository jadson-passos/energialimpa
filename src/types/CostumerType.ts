import EnumConsumoElegivel from "../enum/EnumConsumoElegivel"
import EnumTarifaElegivel from "../enum/EnumTarifaElegivel"

export type TCostumer = {
  numeroDoDocumento: string,
  tipoDeConexao: string,
  classeDeConsumo: EnumConsumoElegivel,
  modalidadeTarifaria: EnumTarifaElegivel,
  historicoDeConsumo: Array<any>
}
