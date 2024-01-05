
import { Deck } from './deck.js';
import { createFullDeckOfCards } from './deck.js';
import { shuffleArray } from './shuffle/shuffle-helper.js';
import { areCardsEqual } from './card-helper/are-cards-equal.js'
import { selectNineCards } from './card-helper/get-nine-cards.js'

import { CreateASet } from './create-a-set/create-a-set.js';
import { checkSet } from './is-it-a-set-logic/check-set.js';

let gameBoard;
let set;
let card1;
let card2;
let card3;
let fullDeck;
let filterArray;
let liveDeck;
let selectedCards = [];


function beginTheGame() {

  gameBoard = document.querySelector("#game-board");
  // set is an array of 3 cards that will be a complete set.
  set = new CreateASet();
  // These 3 cards will hold the 3 cards which make a set!
  card1 = set[0];
  card2 = set[1];
  card3 = set[2];
  //fullDeck is an array of cards that hold all 81 card possibilites.
  fullDeck = createFullDeckOfCards();
  // Remove the card/cards that are in the set array from fullDeck 
  // Making a new array called filterArray which will have 78 to 80 cards in it. 
  filterArray = fullDeck.filter(card2 => !set.some(card1 => areCardsEqual(card1, card2)));
  shuffleArray(filterArray);
  // Remove 9 cards from filterArray.
  // We will push these 9 cards into the set. 
  const selectedCards = selectNineCards(filterArray);
  // Push those 9 cards into the set deck creating a deck of 12 cards - a liveDeck. 
  set.push(...selectedCards);
  //Now we need to shuffle the set array.
  shuffleArray(set); 
  // Now let us create our liveDeck.
  liveDeck = new Deck(set);

  createHTMLForDeck();

  console.log("card1: ", card1);
  console.log("card2: ", card2);
  console.log("card3: ", card3);
 /* console.log("Filter Array: ", filterArray);
  console.log("Full Deck: ", fullDeck);
  console.log("liveDeck: ", liveDeck); */
}

function beginNewRound() {

  // set is an array of 3 cards that will be a complete set.
  set = new CreateASet();
  // These 3 cards will hold the 3 cards which make a set!
  card1 = set[0];
  card2 = set[1];
  card3 = set[2];

  filterArray = fullDeck.filter(card2 => !set.some(card1 => areCardsEqual(card1, card2)));
  shuffleArray(filterArray);
  // Remove 9 cards from filterArray.
  // We will push these 9 cards into the set. 
  const selectedCards = selectNineCards(filterArray);
  // Push those 9 cards into the set deck creating a deck of 12 cards - a liveDeck. 
  set.push(...selectedCards);
  //Now we need to shuffle the set array.
  shuffleArray(set); 
  // Now let us create our liveDeck.
  liveDeck = new Deck(set);

  createHTMLForDeck();
 
  console.log("card1: ", card1);
  console.log("card2: ", card2);
  console.log("card3: ", card3);
 /* console.log("Filter Array: ", filterArray);
  console.log("Full Deck: ", fullDeck);
  console.log("liveDeck: ", liveDeck); */

}


function createHTMLForDeck() {
    gameBoard.textContent = '';

    for (let i = 0; i < liveDeck.sizeOfDeck(); i++) {
        const cardHTML = liveDeck.cards[i].createHTML(i);     
        cardHTML.addEventListener('click', eventFunction);
        gameBoard.appendChild(cardHTML);
    }
}



function eventFunction(event) 
{
    const card = event.target; 

    if(card.style.borderTopWidth == '5px') 
    {
        let indexToRemove = selectedCards.indexOf(card.id);
        event.target.style.border = '1px solid black';
        event.target.style.boxShadow = '';
        if (indexToRemove !== -1) {
          selectedCards.splice(indexToRemove, 1);
        } 
    } 
    else 
    {
        event.target.style.border = '5px solid black';
        event.target.style.boxShadow = 'black 0 0 20px';  
        selectedCards.push(card.id); 
    }


    if (selectedCards.length === 3) 
    {
      /* !!!!!!!I will need to remove the eventListeners!!!!!!! */
      let isSet = checkSet(liveDeck, selectedCards);
      console.log("selected: ", selectedCards);
      if (isSet) 
      {
        console.log("Good!");
        selectedCards = [];
        beginNewRound()

      } 
      else 
      {
        console.log("Bad!");
        for (let i = 0; i < 3; i++) 
        {
          const element = document.getElementById(selectedCards[i]);
         /* console.log("Element: ", element); */
          element.style.border = '1px solid black';
          element.style.boxShadow = '';
        }
        selectedCards = [];
      } 
   }
}



beginTheGame();


















