/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

## tool:
- let/const
- math random
- if/else

*/

//Generare un numero random da 1 a 6 user play
const userPlay = Math.floor((Math.random() * 6) + 1);
console.log(userPlay);

//Generare un numero random da 1 a 6 computer play
const computerPlay = Math.floor((Math.random() * 6) + 1);
console.log(computerPlay);

//Stabilire il vincitore in base al punteggio più alto