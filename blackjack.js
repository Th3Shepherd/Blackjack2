let canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

let contezt = canvas.getContext("2d")


var used_cards = new Array();

function card(name,suit,value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
} 


var deck = [
    new card('Ace', 'Hearts',11),
    new card('Two', 'Hearts',2),
    new card('Three', 'Hearts',3),
    new card('Four', 'Hearts',4),
    new card('Five', 'Hearts',5),
    new card('Six', 'Hearts',6),
    new card('Seven', 'Hearts',7),
    new card('Eight', 'Hearts',8),
    new card('Nine', 'Hearts',9),
    new card('Ten', 'Hearts',10),
    new card('Jack', 'Hearts',10),
    new card('Queen', 'Hearts',10),
    new card('King', 'Hearts',10),
    new card('Ace', 'Diamonds',11),
    new card('Two', 'Diamonds',2),
    new card('Three', 'Diamonds',3),
    new card('Four', 'Diamonds',4),
    new card('Five', 'Diamonds',5),
    new card('Six', 'Diamonds',6),
    new card('Seven', 'Diamonds',7),
    new card('Eight', 'Diamonds',8),
    new card('Nine', 'Diamonds',9),
    new card('Ten', 'Diamonds',10),
    new card('Jack', 'Diamonds',10),
    new card('Queen', 'Diamonds',10),
    new card('King', 'Diamonds',10),
    new card('Ace', 'Clubs',11),
    new card('Two', 'Clubs',2),
    new card('Three', 'Clubs',3),
    new card('Four', 'Clubs',4),
    new card('Five', 'Clubs',5),
    new card('Six', 'Clubs',6),
    new card('Seven', 'Clubs',7),
    new card('Eight', 'Clubs',8),
    new card('Nine', 'Clubs',9),
    new card('Ten', 'Clubs',10),
    new card('Jack', 'Clubs',10),
    new card('Queen', 'Clubs',10),
    new card('King', 'Clubs',10),
    new card('Ace', 'Spades',11),
    new card('Two', 'Spades',2),
    new card('Three', 'Spades',3),
    new card('Four', 'Spades',4),
    new card('Five', 'Spades',5),
    new card('Six', 'Spades',6),
    new card('Seven', 'Spades',7),
    new card('Eight', 'Spades',8),
    new card('Nine', 'Spades',9),
    new card('Ten', 'Spades',10),
    new card('Jack', 'Spades',10),
    new card('Queen', 'Spades',10),
    new card('King', 'Spades',10)
];

var hand = {
    cards : new Array(),
    current_total : 0,

    sumcardtotal:function(){
        this. current_total=0;
        for (let i = 0; i< this.cards.length; i++) {
          const c = this.cards[i];
          this.current_total += c.value;
           
        }
        if (this.current_total> 21){
            console.log("BUST!!!!!!!!!!!!")
            }
        else if(this.current_total ===21){
                console.log("BLACKJACK");
            }
            else{

            }

    }
}

function getrandomnum(num){
    var my_num = Math.floor(Math.random()*num);
    return my_num
}

function deal(){
    for (let i = 0; i < 2; i++){
        hit()
    }
}
function hit(){
    var good_card = false;
    do {
        var index = getrandomnum(52);
        if(!$.inArray(index.used_cards) > -1){
            good_card = true;
            var c = [index];
            used_cards[used_cards.length] = index;
            hand.cards [hand.cards.length] = c;
        }
    } while(good_card == false)
}



function clearCanvas() {
    context.fillStyle = "white"
    context.fillRect(0,0,canvas.width,canvas.height)

}

function update () {
    clearCanvas()
}

class Button{
    constructor(location,width,length){
        this.location-location;
        this.width-width;
        this.length-length;
    }
}