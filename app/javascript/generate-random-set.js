import { CreateASet } from './create-a-set/create-a-set.js';
import { Deck } from './deck.js';


let setBoard = document.querySelector("#my-set");
let myButton = document.getElementById("gButton");
let set; 
let liveDeck;


myButton.addEventListener('click', eventFunction);

function eventFunction(event) 
{
	setBoard.textContent = '';
	set = new CreateASet();
	liveDeck = new Deck(set);

	for (let i = 0; i < liveDeck.sizeOfDeck(); i++) {
        const cardHTML = liveDeck.cards[i].createHTML(i);
        setBoard.appendChild(cardHTML);
    }   
}