'use strict'
let numeriArray = [];
let somma = 0;

while (somma < 50) {
  const numero = parseInt(prompt("Inserisci un numero:"));
  
  numeriArray.push(numero);
  somma += numero;
}

console.log("La somma degli elementi è:", somma);
console.log("Array finale:", numeriArray);
