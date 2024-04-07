import { expect, test } from "@jest/globals";
import { razoesDeInelegibilidade } from "../services/razoesDeInelegibilidade";
import EnumConsumoElegivel from "../enum/EnumConsumoElegivel";
import EnumTarifaElegivel from "../enum/EnumTarifaElegivel";


describe('Analisa a inelegibilidade', () => {
    it('analisa conexao monofasico alto', async () => {
        expect(razoesDeInelegibilidade(EnumConsumoElegivel.COMERCIAL, EnumTarifaElegivel.CONVENCIONAL)).toEqual([true, true, ['', '']]);
    })


}) 