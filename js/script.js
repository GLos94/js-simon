



$(document).ready(function functionName() {

  var numCasuali = 0;
  var arrayNumCasuali = [];
  var arrayNumUtente = [];
// Un alert espone 5 numeri casuali (univoci).
  for (var i = 0; i < 5; i++) {
  numCasuali = alert(getRandomIntInclusive(1,100));
  console.log(numCasuali);
  arrayNumCasuali.push(numCasuali);
}
console.log(arrayNumCasuali);

// Poi parte un timer di 30 secondi.
var timer = setTimeout(function() {
  console.log(timer);
  console.log('hello');
  };

},3000*10);


// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
for (var i = 0; i < 5; i++) {
  var numUtente = parseInt(prompt('Inserisci i numeri che hai visto' ));
  arrayNumUtente.push(numUtente);

console.log(arrayNumUtente);

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


});

// functions
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
