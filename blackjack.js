var dealersum = 0;
var playersum = 0;

var dealeracecount =0;//håller koll på hur många ace dealern har 
var youracecount = 0; //håller koll på hur många ace playern har 

var hidden;
var Deck;

var canhit = true; // så att du kan hit

window.onload = function(){
    builddeck();
}

function builddeck(){
    let values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let types = ["C","D","H","S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let x = 0; x < values.length; x++) {
            deck.push(values[x] + "-" + types[i]);
        }
    }
}

