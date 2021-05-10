//****************** Snack 5 ****************
// Crea un array vuoto.
var array = []
var number;
var result = document.getElementById("result")
// Chiedi per 6 volte all’utente di inserire un numero.
for (var i = 0; i < 6; i++){
    number = Number(prompt("Inserisci un numero, registrerò i numeri dispari per te."))
    if ((number % 2) !=0){
        array.push(number);
    }
}
console.log(array);
console.log(number);
result.innerHTML = array;
// Se è dispari inseriscilo nell’array