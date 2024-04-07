export function calculaMediaConsumo(valorHistorico: number[]): number {

    const mediaConsumo = (valorHistorico.reduce((acumulador, elemento) => acumulador + elemento, 0)) / 12;

    return mediaConsumo
}