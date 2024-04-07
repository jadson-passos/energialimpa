import { expect, test } from "@jest/globals";
import { calculaMediaConsumo } from "../services/calculaMediaConsumo";

const consumoAnual = [3878, 9760, 5976, 2797, 2481, 5731, 7538, 4392, 7859, 4160, 6941, 4597]

test('calcula media consumo - deve ter retorno media consumo equal 5509.166666666667', () => {
    expect(calculaMediaConsumo(consumoAnual)).toBe(5509.166666666667);
});

