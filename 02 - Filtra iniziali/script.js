/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function NameWithFirstletter(name, firstletter){
    const newArray = [];
    for(let i=0; i<name.length; i++){
       const curName = name[i];
        const first  = curName.charAt(0)
    //verifico che la pria lettera sia uguale a quella desisderata "A"
        if(first === firstletter){
            newArray.push(curName)
        }
    }
    //chiudo con return, se non verifica procedo con il for
       return newArray;
}


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(NameWithFirstletter(names, "A"));