import { expect, test } from "@jest/globals";
import { projecaoEconomia } from "../services/projecaoEconomia";

const histMedia = 5509.166666666667

test('calcula a projecao de economia em CO2 pela media de consumo', () => {
    expect(projecaoEconomia(histMedia)).toBe(5553.24);
});

