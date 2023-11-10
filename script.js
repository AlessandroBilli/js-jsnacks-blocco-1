'use strict'


const primaParola = prompt("Inserisci la prima parola:");


const secondaParola = prompt("Inserisci la seconda parola:");


console.log("Hai inserito le seguenti parole:");
console.log("Prima parola:", primaParola);
console.log("Seconda parola:", secondaParola);


if (primaParola.length < secondaParola.length) {
    console.log(secondaParola);
    
} else if (primaParola.length > secondaParola.length) {
    console.log(primaParola);
    
} else {
    console.log("Le due parole hanno la stessa lunghezza.");
}