// Un alert espone 5 numeri casuali (univoci).

$(document).ready(function() {
  var arrayNumCasuali = [];
  var arrayNumUtente = [];

  $('#genera').click(function() {
    for (var i = 0; i < 5; i++) {
    var numCasuali = $('#random').val;
    numCasuali = getRandomIntInclusive(1,100);
    alert(numCasuali);
    arrayNumCasuali.push(numCasuali);
  }
  console.log('I numeri casuali sono: ' + arrayNumCasuali);

  })



// Poi parte un timer di 30 secondi.
var timer = setTimeout(function() {

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
  for (var i = 0; i < 5; i++) {
    var numUtente = parseInt(prompt('Inserisci i numeri che hai visto' ));
    arrayNumUtente.push(numUtente);

  };

  console.log('I tuoi numeri sono: ' + arrayNumUtente);


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
var punteggio = 0;
  for (var i = 0; i < arrayNumUtente.length; i++) {
    if (checkCompare(arrayNumCasuali, arrayNumUtente[i])) {
    punteggio++
  };
};

console.log('Hai totalizzato ' + punteggio + ' punti');

},3000);



});

// functions
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCompare(array, num ){
  var key = false;
  for (var i = 0; i < array.length; i++) {
   if (array[i]== num) {
     key = true;
   }
 }
 return key;
}
