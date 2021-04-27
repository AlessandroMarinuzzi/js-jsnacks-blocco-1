// ************ JSnack 1 ***************
// L’utente inserisce due parole in successione, con due prompt.
var word_1 = prompt("Inserisci una parola")
console.log(word_1);
var word_2 = prompt("Inserisci un' altra parola")
console.log(word_2);
// Il software stampa prima la parola più corta, poi la parola più lunga.
if (word_1.length > word_2.length){
    console.log(word_1 , word_2);
    document.getElementById("longest_word").innerHTML = word_1 + "" + word_2
} else if (word_1.length < word_2.length) {
    console.log(word_2 , word_1);
    document.getElementById("longest_word").innerHTML = word_2 + "" + word_1
} else {
    console.log("Try Again");
    document.getElementById("longest_word").innerHTML = "Try Again!"
}

