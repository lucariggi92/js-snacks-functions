/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

// creo l'array con le vocali
const vocali = [ "a", "e", "i", "o", "u"]

const word = 'Word';


// Dichiara la funzione qui.
function numVocali (parola, array){
    let num = 0;
    
    for (let i=0; i<parola.length; i++ ){
         let curLetter = parola[i]

         for(let i=0; i<array.length; i++ ){
            let curVoc = array[i];

            if(curLetter === curVoc){
               num = num + 1;

            }
         }    
       
    }
     return console.log(num)
   
       
}

// Invoca la funzione qui e stampa il risultato in console

console.log(numVocali(word, vocali))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
