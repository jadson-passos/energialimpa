import { expect, test } from "@jest/globals";
import { analisaTipoConexao } from "../services/analisaTipoConexao";


describe('Analisa tipo de conexao e consumo', () => {
    it('analisa conexao monofasico alto', async () => {
        expect(analisaTipoConexao('monofasico', 410)).toEqual([true, ""]);
    })
    it('analisa conexao monofasico baixo', async () => {
        expect(analisaTipoConexao('monofasico', 300)).toEqual([false, "Consumo muito baixo para tipo de conexão"]);
    })
    it('analisa conexao bifasico alto', async () => {
        expect(analisaTipoConexao('bifasico', 600)).toEqual([true, ""]);
    })
    it('analisa conexao bifasico baixo', async () => {
        expect(analisaTipoConexao('bifasico', 490)).toEqual([false, "Consumo muito baixo para tipo de conexão"]);
    })
    it('analisa conexao trifasico alto', async () => {
        expect(analisaTipoConexao('trifasico', 800)).toEqual([true, ""]);
    })
    it('analisa conexao trifasico baixo', async () => {
        expect(analisaTipoConexao('trifasico', 650)).toEqual([false, "Consumo muito baixo para tipo de conexão"]);
    })

}) 