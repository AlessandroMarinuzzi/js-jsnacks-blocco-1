//****************** Snack 5 ****************
// Crea un array vuoto.
var array = []
var number;
var result = document.getElementById("result")
// Chiedi per 6 volte all’utente di inserire un numero.
for (var i = 0; [i] < 6; i++) {
    var number = Number(prompt('insert number'));
    if ( number % 2 != 0){
        array.push(number);
     }
 }
 result.innerHTML = number;
// Se è dispari inseriscilo nell’array