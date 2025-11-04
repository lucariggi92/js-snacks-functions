/*Scrivi un programma in JavaScript che chieda all’utente di inserire una parola o 
una frase e ne restituisca la versione tradotta secondo la regola dell’alfabeto farfallino.

In questo linguaggio giocoso, ogni vocale della parola viene ripetuta e tra le due copie viene inserita la lettera "f".

Esempio:
Input:  ciao
Output: cifaifao
*/

const parola = "luca";
function alfabetoFarfallino (word){
   let newWord ="";
  
    const vocali = ["a","e","i","o","u"]
    for(let i=0; i<word.length; i++){
       let curLetter = word[i] //l

        let newVocale = curLetter;

        for(let j = 0; j<vocali.length; j++){
           let curVoc = vocali[j] //a //e

            if (curLetter === curVoc){//l==a?
               newVocale = curVoc + "f" + curVoc //afa
            }
        
            
        }
        
            newWord = newWord + newVocale
      
    }
  
    return  console.log(newWord);

}


console.log (alfabetoFarfallino (parola))