'use strict'
const numeriInseriti = [];

for (let i = 0; i < 10; i++) {
    const richiestaNumero = prompt('Inserisci un numero:');
    numeriInseriti.push(richiestaNumero);
}

console.log('Numeri inseriti:', numeriInseriti);