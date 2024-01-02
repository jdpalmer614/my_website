
import { Card } from '../deck.js';

export function option1(randomColor, randomShape, randomShade, randomNumber, items) {

    let card1;
    let card2;
    let card3;

    if (randomColor === -1) {

        randomColor = items[0];
        card1 = new Card(randomColor[0], randomShape, randomShade, randomNumber);
        card2 = new Card(randomColor[1], randomShape, randomShade, randomNumber);
        card3 = new Card(randomColor[2], randomShape, randomShade, randomNumber);


    } else if (randomShape === -1) {
        
        randomShape = items[1];
        card1 = new Card(randomColor, randomShape[0], randomShade, randomNumber);
        card2 = new Card(randomColor, randomShape[1], randomShade, randomNumber);
        card3 = new Card(randomColor, randomShape[2], randomShade, randomNumber);

    } else if (randomShade === -1) {
        
        randomShade = items[2];
        card1 = new Card(randomColor, randomShape, randomShade[0], randomNumber);
        card2 = new Card(randomColor, randomShape, randomShade[1], randomNumber);
        card3 = new Card(randomColor, randomShape, randomShade[2], randomNumber);

    } else if (randomNumber === -1) {
        
        randomNumber = items[3];
        card1 = new Card(randomColor, randomShape, randomShade, randomNumber[0]);
        card2 = new Card(randomColor, randomShape, randomShade, randomNumber[1]);
        card3 = new Card(randomColor, randomShape, randomShade, randomNumber[2]);
    }

    return [card1, card2, card3];
}












