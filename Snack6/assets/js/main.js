// ********** Snack 6 ***************
// Chiedi un numero di 4 cifre all’utente
// Calcola la somma di tutte le cifre che compongono il numero. 

var userNumber = Number(prompt("Enter a four-digit number to calculate the sum"))
console.log(userNumber)

var sum = 0

while (userNumber > 0) {
    sum += userNumber % 10;
    userNumber = Math.floor(userNumber / 10);
}

console.log(sum);