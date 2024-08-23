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

 /**if-else: Permite sa se execute un bloc de cod daca o conditie este adevarata 
  * si alt bloc de cod daca aceeasi conditie este falsa.
  */

 if (!isChoreDone || !hasEaten) {
    console.log("Te poti uita la desene animate");
 } else {
    if(!isChoreDone) {
        console.log("Inca mai ai de lucru! Te poti uita la desene animate dupa ce ai terminat treaba.");
    }

    if (!hasEaten) {
        console.log("Inca nu ai terminat de mancat.");
    } 
 }

 /** Operatorul ternar (sau operatorul conditional) este o forma compacta
  *  de a scrie o instructiune if-else intr-o singură linie. 
  * Acesta este adesea folosit pentru a atribui o valoare variabilei in functie de o anumita conditie.
Sintaxa: condiție ? valoareDacaAdevărat : valoareDacaFals;
  */

let age = 20;
let canVote = (age >= 18) ? "Poate vota" : "Nu poate vota";
console.log(canVote);

/** if-else if-else: Permite gestionarea mai multor conditii intr-o succesiune. 
 * Se testeaza fiecare conditie in ordine si se executa primul bloc de cod asociat cu prima conditie 
 * adevarata sau blocul asociat cu else daca nici o conditie nu e adevarata.
 */

let number = -13;

if (number > 0) {
    console.log("Numarul ales este pozitiv");
} else if (number < 0) {
    console.log("Numarul ales este negativ");
} else {
    console.log("Numarul ales este 0");
}

/** switch: Este utilizat atunci cand trebuie sa se compare o valoare cu mai multe posibilitati.
 */

const dayOfTheWeek = 4;

switch (dayOfTheWeek) {
    case 1:
        console.log("Ziua saptamanii este Luni");
        break;
    case 2:
        console.log("Ziua saptamanii este Marti");
        break;
        case 3:
        console.log("Ziua saptamanii este Miercuri");
        break;
        default:
            console.log("Nu stiu ce zi a saptamanii este aceasta");
                break;
}

/** 2. Loops
 * Buclele sau instructiunile repetitive sunt structuri de control care permit executarea 
 * repetitiva a unui bloc de cod. Acestea sunt folosite pentru a automatiza sarcini repetitive sau pentru a 
 * parcurge iterativ valori din colectii de date (array, object, etc).
 */

/** While- Este o structura de control repetitiva ce permite executarea unui bloc de cod atat timp 
 * cat o anumita conditie sau expresie este adevarata.
 */

const numbers = [2, 99, 34, 25, 1, -23];

let smallestNumber = Number.MAX_SAFE_INTEGER;
let currentIndex = 0;

while (currentIndex < numbers.length) {
    if (numbers[currentIndex] < smallestNumber) {
        smallestNumber = numbers[currentIndex];
    }

    currentIndex++;
}

console.log(`Cel mai mic numar din lista este: `, smallestNumber);

/** Do while- Este o structura de control repetitiva ce permite executarea 
 * unui bloc de cod atat timp cat o anumita conditie sau expresie este adevarata. 
 * Blocul de cod se executa cel putin odata indiferent de valoarea conditiei.
 */

let n = 10;
let num = 0;
do {
    num++;
    console.log(num);
} while (num < n);

/** For- Este o structura de control repetitiva ce 
 * permite executarea unui bloc de cod de un număr finit de ori.
 */

let times = 10;

for (let i = 0; i < 10; i++) {
    console.log(`Hello ${i}`);
}

let smallestNr = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] < smallestNr) {
        smallestNr = numbers[i];
    }
}

console.log(`Cel mai mic numar din lista este: `, smallestNr);






 