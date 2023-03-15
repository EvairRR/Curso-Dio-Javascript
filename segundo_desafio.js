//Faça um programa para calcular o valor de uma viagem.

//Você terá 5 variáveis. Sendo elas:
//1 - Preço do etano;
//2- Preço da gasolina;
//3 - O tipo de combustível que está no seu carro;
//4- Gasto médio de combustível do carro por KM;
//5- Distância em km da viagem;

//Imprima no console o valor que será gasto para realizar a viagem.

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm= 100;
const tipoCombustivel = 'Etanol';

const litrosCosnumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {
const valorGasto = litrosCosnumidos* precoEtanol;
console.log (valorGasto.toFixed(2));
} else {
    const valorGasto = litrosCosnumidos * precoGasolina;
    console.log (valorGasto.toFixed(2));
}