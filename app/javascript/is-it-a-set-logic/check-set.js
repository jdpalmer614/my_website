import { Deck } from '../deck.js';

export function checkSet(liveDeck, selectedCards) {

  let isSet = false;

  const card1 = liveDeck.getCard(selectedCards[0]);
  const card2 = liveDeck.getCard(selectedCards[1]);
  const card3 = liveDeck.getCard(selectedCards[2]);

  const isNumber = checkNumber(card1, card2, card3);
  const isColor = checkColor(card1, card2, card3);
  const isShape = checkShape(card1, card2, card3);
  const isShade = checkShade(card1, card2, card3);

  if (isNumber !== 0 && isColor !== 0 && isShape !== 0 && isShade !== 0) {
    isSet = true;
  }
  /*
  console.log("isNumber: ", isNumber);
  console.log("isColor: ", isColor);
  console.log("isShape: ", isShape);
  console.log("isShade: ", isShade);
  */
  return isSet;
}


function checkNumber(card1, card2, card3) {

  let isNumber = 0;

  if (card1.number === card2.number && card2.number === card3.number) {

    isNumber = 1; 

    } else if (card1.number !== card2.number && card2.number !== card3.number && card1.number !== card3.number) {

      isNumber = 2;
    }

    return isNumber; 

}

function checkColor(card1, card2, card3) {

  let isColor = 0;

  if (card1.color === card2.color && card2.color === card3.color) {

    isColor = 1; 

    } else if (card1.color !== card2.color && card2.color !== card3.color && card1.color !== card3.color) {

      isColor = 2;
    }

    return isColor; 

}

function checkShape(card1, card2, card3) {

  let isShape = 0;

  if (card1.shape === card2.shape && card2.shape === card3.shape) {

    isShape = 1; 

    } else if (card1.shape !== card2.shape && card2.shape !== card3.shape && card1.shape !== card3.shape) {

      isShape = 2;
    }

    return isShape; 

}

function checkShade(card1, card2, card3) {

  let isShade = 0;

  if (card1.shade === card2.shade && card2.shade === card3.shade) {

    isShade = 1; 

    } else if (card1.shade !== card2.shade && card2.shade !== card3.shade&& card1.shade !== card3.shade) {

      isShade = 2;
    }

    return isShade; 

} 