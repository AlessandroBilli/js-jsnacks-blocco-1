'use strict'

const N= prompt ('Inserisci un numero')
console.log (N)

for (let i = 0; i < N; i++) {
    let array = [];

    for (let j = 0; j < 10; j++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }

    console.log(`Array ${i + 1}:`, array);
}