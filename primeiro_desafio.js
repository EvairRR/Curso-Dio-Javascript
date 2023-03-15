

const precoCombustivel = 5.79; 
const kmPorLitros = 15;
const distanciaKm = 330;

const combustivelGasto = distanciaKm / kmPorLitros;
const valorGasto = combustivelGasto * precoCombustivel;

console.log (valorGasto.toFixed(2));