/* 
Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

## tool:
- let/const
- math.floor
- if/else

*/

document.getElementById('spear').addEventListener('click', function () {
    
    //Generare un numero random da 1 a 6 user play
    const userPlay = Math.floor((Math.random() * 6) + 1);
    console.log(userPlay);
    
    //Generare un numero random da 1 a 6 computer play
    const computerPlay = Math.floor((Math.random() * 6) + 1);
    console.log(computerPlay);
    
    //Stabilire il vincitore in base al punteggio più alto
    if (userPlay === computerPlay) {
        console.log('you tied');
    }
    else if (userPlay > computerPlay) {
        console.log('you win');
        
    } else if (userPlay < computerPlay) {
        console.log('you lost');
        
    } 
})


/* 
Mail

Chiedi all'utente la sua email, 
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.

## tool:
- prompt
- array
- for
- if/else
- inner html

*/

document.getElementById ('check').addEventListener('click', function () {
    
    //Chiedere userMail
    const userMail = prompt('enter your invitation email');
    console.log(userMail);
    
    //Creare listMail partecipanti
    const guestList = ['fabio84@gmail.com', 'licia98@gmail.com', 'maria81@gmail.com', 'danilo99@gmail.com'];
    console.log(guestList); 
    
    //Verificare se userMail è presente nella listMail
    let invited = false;
    
    for (let i = 0; i <= guestList.length; i++) {
        if (userMail == guestList[i]) {
            console.log('sei invitato');
            invited = true;
        }    
    }
    
    if (invited == false) {
        console.log('non sei invitato');
    }
})



//Stampa esito verifica

/* 
Bonus

Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Consigli del giorno:
1 scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2 javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3 si ma noi cosa vogliamo fare?
4 torniamo a scrivere in italiano
5 proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" 
*/