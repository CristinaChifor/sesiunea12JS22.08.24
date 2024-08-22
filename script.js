console.log("Hello!");

// Conditionals and Loops

/** 1. Conditionals
 Structurile conditionale sunt utilizate pentru a executa un bloc de cod in functie de 
 evaluarea unei expresii sau a unei conditii. 
 Rezultatul evaluarii conditiei va avea intotdeauna 
 tipul de date boolean (true sau false).
 */

 /**if - Este cea  mai simpla structura conditionala. 
 Blocul de cod asociat cu ‘if’ este executat doar daca expresia/conditia este adevarata.*/

 let isChoreDone = false;
 let hasEaten = false;

 if (isChoreDone) {
    console.log("Te poti uita la desene animate");
 }

 if (!isChoreDone || !hasEaten) {

    if(!isChoreDone) {
        console.log("Inca mai ai de lucru! Te poti uita la desene animate dupa ce ai terminat treaba.");
    }

    if (!hasEaten) {
        console.log("Inca nu ai terminat de mancat.");
    }
    
 }

 