
let score = 0.0;

let cards = [
{rank: "queen", suit: "hearts", cardImage: "images/queen-of-hearts.png"},
 {rank: "queen", suit: "diamonds", cardImage: "images/queen-of-diamonds.png"},
 {rank: "king", suit: "hearts", cardImage: "images/king-of-hearts.png"},
 {rank: "king", suit: "diamonds", cardImage: "images/king-of-diamonds.png"}
 ];
let cardsInPlay = [];

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').append(cardElement);
	}	
}

function checkForMatch(){
	//console.log(document.getElementById('game-board').getElementsByTagName('div'));
	document.getElementById('game-board').getElementsByTagName('img')[cardId].setAttribute('src',cards[cardId].cardImage);

	if(cardsInPlay.length == 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
		  alert("You found a match!");
		  score += 1;
		  document.getElementById('score').textContent = score;
		} else {
		  alert("Sorry, try again.");
		  score -= 0.5;
		  document.getElementById('score').textContent = score;
		}		
	}
}

function flipCard(){
	cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("card image: " + cards[cardId].cardImage);
	console.log("suit: " + cards[cardId].suit);
	checkForMatch();	
}

function resetGame(){
	cardsInPlay = [];
	for (var i = 0; i < cards.length; i++) {
		document.getElementById('game-board').getElementsByTagName('img')[i].setAttribute('src','images/back.png');		
	}	
}

createBoard();

document.getElementsByTagName('button')[0].addEventListener('click',resetGame);
