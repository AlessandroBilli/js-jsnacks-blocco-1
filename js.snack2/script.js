'use strict'


const primaParola = prompt("Inserisci la prima parola:");


const secondaParola = prompt("Inserisci la seconda parola:");


console.log("Hai inserito le seguenti parole:");
console.log("Prima parola:", primaParola);
console.log("Seconda parola:", secondaParola);


if (primaParola.length < secondaParola.length) {
    console.log('La parola più lunga è:' + secondaParola);
    console.log('La parola più corta è:' + primaParola);

} else if (primaParola.length > secondaParola.length) {
    console.log('La parola più lunga è:' + primaParola);
    console.log('La parola più corta è:' + secondaParola);

} else {
    console.log("Le due parole hanno la stessa lunghezza.");
    console.log("Prima parola:", primaParola);
    console.log("Seconda parola:", secondaParola);
}