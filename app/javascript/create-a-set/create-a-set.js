
import { generateRandomDistinctNumbers } from './create-a-set-helper.js';
import { removeElementsFromArray } from './create-a-set-helper.js';
import { getRandomItem } from './create-a-set-helper.js';
import { updateValues } from './create-a-set-helper.js';
import { Card } from '../deck.js';
import { Deck } from '../deck.js';

import { option0 } from '../options/option0.js';
import { option1 } from '../options/option1.js';
import { option2 } from '../options/option2.js';
import { option3 } from '../options/option3.js';
import { option4 } from '../options/option4.js';

import { shuffleArrays } from '../shuffle/shuffle-helper.js';

export class CreateASet 
{
    constructor() 
    {
        let option = Math.floor(Math.random() * 5); /* [0, 4] */

        let sameArray = [0, 1, 2, 3];
        let diffArray = [];

        let randomColor = -1;
        let randomShape = -1; 
        let randomShade = -1;
        let randomNumber = -1;
        let updatedValues = -1; 

        let card1;
        let card2; 
        let card3;

        let cards = [];

        const items = [
            ["blue", "green", "red"],
            ["diamond", "oval", "s"],
            ["fill", "none", "striped"],
            ["1", "2", "3"]
        ];

        shuffleArrays(items);

        switch (option) {
            case 0:
                console.log("Option #0 - 4 Same");  
                updatedValues = updateValues(randomColor, randomShape, randomShade, randomNumber, sameArray, items);
                updateAttributes(updatedValues);
                [card1, card2, card3] = option0(randomColor, randomShape, randomShade, randomNumber);
                cards.push(card1, card2, card3);
                break;
            case 1:
                console.log("Option #1 - 3 Same and 1 Different");   
                diffArray = generateRandomDistinctNumbers(1, 0, 3);
                removeElementsFromArray(sameArray, diffArray);
                updatedValues = updateValues(randomColor, randomShape, randomShade, randomNumber, sameArray, items);
                updateAttributes(updatedValues);
                [card1, card2, card3] = option1(randomColor, randomShape, randomShade, randomNumber, items);
                cards.push(card1, card2, card3);
                break;
            case 2:
                console.log("Option #2 -  2 Same and 2 Different");
                diffArray = generateRandomDistinctNumbers(2, 0, 3);
                removeElementsFromArray(sameArray, diffArray);
                updatedValues = updateValues(randomColor, randomShape, randomShade, randomNumber, sameArray, items);
                updateAttributes(updatedValues);
                [card1, card2, card3] = option2(randomColor, randomShape, randomShade, randomNumber, items);
                cards.push(card1, card2, card3);
                break;
            case 3:
                console.log("Option #3 -  1 Same and 3 Different");
                diffArray = generateRandomDistinctNumbers(3, 0, 3);
                removeElementsFromArray(sameArray, diffArray);
                updatedValues = updateValues(randomColor, randomShape, randomShade, randomNumber, sameArray, items);
                updateAttributes(updatedValues);
                [card1, card2, card3] = option3(randomColor, randomShape, randomShade, randomNumber, items);
                cards.push(card1, card2, card3);
                break;
            default:
                console.log("Option #4 - 4 Different");
                sameArray = [];
                diffArray = [0, 1, 2, 3];
                [card1, card2, card3] = option4(randomColor, randomShape, randomShade, randomNumber, items); 
                cards.push(card1, card2, card3);

        }

        function updateAttributes(updatedValues) {
            randomColor = updatedValues.randomColor;
            randomShape = updatedValues.randomShape;
            randomShade = updatedValues.randomShade;
            randomNumber = updatedValues.randomNumber;
        }

        return cards;
    }
}







