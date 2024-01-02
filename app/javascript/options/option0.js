
import { Card } from '../deck.js';

export function option0(randomColor, randomShape, randomShade, randomNumber) {


    let card1;
    let card2;
    let card3;

    card1 = new Card(randomColor, randomShape, randomShade, randomNumber);
    card2 = new Card(randomColor, randomShape, randomShade, randomNumber);
    card3 = new Card(randomColor, randomShape, randomShade, randomNumber); 

    return [card1, card2, card3];
}