export function projecaoEconomia(historicoMedia: number): number {

    const mediaEmissiaoBR = 84 //CO2

    let projecao: number = (historicoMedia * mediaEmissiaoBR / 1000) * 12


    return projecao
}