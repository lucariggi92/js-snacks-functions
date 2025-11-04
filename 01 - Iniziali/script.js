/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function firstLetter(nomi) {
    const newArray = [];
    //scorro ogni singolo nome 
    for (let i = 0; i < nomi.length; i++) {
        //trovo il singolo nome
        let curNome = nomi[i]
        //estraggo la prima lettera
        let first = curNome.charAt(0)
        //la pusho nel nuovo array
        newArray.push(first)
    }

    //chiudo con return
    return newArray
}


// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]