// ******************* Snack 4 *********************
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby.
var gatsby_guests = ["Alessandro", "Fabio", "Michele", "Andrea", "Eveling"]
console.log(gatsby_guests);
// Chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa
var guest = prompt("What's your name?")
console.log(guest);

var message = "You are not on the list"

for (var i = 0; [i] < gatsby_guests.length; i++){
    if (guest == gatsby_guests){
        var message = "Welcome to the party!"
    }
}
document.getElementById("message").innerHTML = message