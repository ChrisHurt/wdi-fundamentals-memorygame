

let cards = [
{rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts"},
 {rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds"},
 {rank: "king", suit: "hearts", cardImage: "images/king-of-hearts"},
 {rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds"}
 ];
let cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay.length == 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
		  alert("You found a match!");
		} else {
		  alert("Sorry, try again.");
		}		
	}
}

function flipCard(cardId){
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("card image: " + cards[cardId].cardImage);
	console.log("suit: " + cards[cardId].suit);
	checkForMatch();	
}

flipCard(0);
flipCard(2);