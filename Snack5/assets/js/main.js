// ************ Snack6 ******************
// Stampa il cubo dei primi N numeri
// Dove N è un numero indicato dall’utente.

var userNumber = Number(prompt("Insert number"))
console.log(userNumber);

for (var i=0; i <= userNumber; i++){
    console.log(Math.pow(i,3) + " ");
}