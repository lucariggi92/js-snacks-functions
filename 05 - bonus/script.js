/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Luca';


// Dichiara la funzione qui.
function salutoOrario (soggetto, ora){
    let result ="";
    if(ora<=13){
        result = "buongiorno"
    }
    else if(ora>=13 && ora <=17) {
        result = "buonpomeriggio";
    }
    else  {
       result = "buonanotte";
    }

    return result + " " + soggetto
}


// Invoca la funzione qui e stampa il risultato in console

console.log (salutoOrario(name, 18))


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.