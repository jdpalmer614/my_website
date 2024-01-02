
import { Card } from '../deck.js';

export function option4(randomColor, randomShape, randomShade, randomNumber, items) {

    let card1;
    let card2;
    let card3;

    randomColor = items[0];
    randomShape = items[1];
    randomShade = items[2];
    randomNumber = items[3];

    card1 = new Card(randomColor[0], randomShape[0], randomShade[0], randomNumber[0]);
    card2 = new Card(randomColor[1], randomShape[1], randomShade[1], randomNumber[1]);
    card3 = new Card(randomColor[2], randomShape[2], randomShade[2], randomNumber[2]);

    return [card1, card2, card3];
}
