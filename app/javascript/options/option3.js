
import { Card } from '../deck.js';



export function option3(randomColor, randomShape, randomShade, randomNumber, items) {


    let card1;
    let card2;
    let card3;

    /* -1 means its an array of 3 */
    if (randomColor !== -1) {

        randomShape = items[1];
        randomShade = items[2];
        randomNumber = items[3];

        card1 = new Card(randomColor, randomShape[0], randomShade[0], randomNumber[0]);
        card2 = new Card(randomColor, randomShape[1], randomShade[1], randomNumber[1]);
        card3 = new Card(randomColor, randomShape[2], randomShade[2], randomNumber[2]);

    } else if (randomShape !== -1) {

        randomColor = items[0];
        randomShade = items[2];
        randomNumber = items[3];

        card1 = new Card(randomColor[0], randomShape, randomShade[0], randomNumber[0]);
        card2 = new Card(randomColor[1], randomShape, randomShade[1], randomNumber[1]);
        card3 = new Card(randomColor[2], randomShape, randomShade[2], randomNumber[2]);

    } else if (randomShade !== -1) {
        
        randomColor = items[0];
        randomShape = items[1];
        randomNumber = items[3];

        card1 = new Card(randomColor[0], randomShape[0], randomShade, randomNumber[0]);
        card2 = new Card(randomColor[1], randomShape[1], randomShade, randomNumber[1]);
        card3 = new Card(randomColor[2], randomShape[2], randomShade, randomNumber[2]);

    } else if (randomNumber !== -1) {

        randomColor = items[0];
        randomShape = items[1];
        randomShade = items[2];

        card1 = new Card(randomColor[0], randomShape[0], randomShade[0], randomNumber);
        card2 = new Card(randomColor[1], randomShape[1], randomShade[1], randomNumber);
        card3 = new Card(randomColor[2], randomShape[2], randomShade[2], randomNumber);
    }

    return [card1, card2, card3];
}
