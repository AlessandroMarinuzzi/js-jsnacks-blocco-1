// ************ JSnack 2 ***************
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
var numbers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

for (var i = 0; i < numbers.length; i++) {
    numbers[i] = Number(prompt('Inserisci un numero.'));
}
// Il programma stampa la somma di tutti i numeri inseriti
var message = document.getElementById('result');

var numbersSum = 0;

for (var i = 0; i < numbers.length; i++) {
    numbersSum += numbers[i];
}

message.innerHTML = 'La somma dei tuoi numeri è: ' + numbersSum;