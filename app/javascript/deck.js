
const COLORS = ["blue", "green", "red"];
const SHAPES = ["diamond", "oval", "s"];
const SHADES =  ["fill", "none", "striped"];
const NUMBERS = ["1", "2", "3"];

export class Deck {
	constructor(cards) {
		this.cards = cards || [];
	}

	sizeOfDeck() {
		return this.cards.length; 
   }

   shuffleDeck() {
   	this.cards.sort(shuffleDeckHelper);
   }
   	/* Only use to remove one card or if
   	   you are removing more than one card
   	   all the cards need to be next to each other. */
   removeCards(index, numberOfCards) {
   	return this.cards.splice(index, numberOfCards);
   }

   /* You can add an array of cards to a deck */
   addCards(index, arrayOfCards) {
   	this.cards.splice(index, 0, ...arrayOfCards);
   }

   getCard(index) {
   	return this.cards[index]; 
   }

   filterDeck(cardsToRemove) {
   	this.cards = this.cards.filter(card => !cardsToRemove.includes(card));
   }

}

export class Card {
	constructor(color, shape, shade, number) {
		this.color = color;
		this.shape = shape;
		this.shade = shade;
		this.number = number;
	}

	createHTML(index) {
		/* <div> */
		const cellElement = document.createElement('div');
      /* <div class="card"> */
      cellElement.classList.add('card');
      /* the element will now have an ID = index */
      cellElement.id = index; 

      cellElement.setAttribute('data-color', this.color);
		cellElement.setAttribute('data-shape', this.shape);
		cellElement.setAttribute('data-shade', this.shade);
		cellElement.setAttribute('data-number', this.number);


		for (let i = 0; i < this.number; i++) {
  			const pipElement = document.createElement('div');
  			pipElement.classList.add('pip');
  			cellElement.appendChild(pipElement);
		}

      return cellElement;
	}
}


 /* Math.random() will generate a number between 0 and 1 in the range of [0, 1)
    and we will shift this range by 0.5 so the range is [-0.5, 0.5) */
 function shuffleDeckHelper(){
    return Math.random() - 0.5;
 }



/* we call flatMap on An array named COLORS. 
   flatMap will interate over each element in the array COLORS,
   and for each color it will execute the code in the arrow function. */


export function createFullDeckOfCards() {
	return NUMBERS.flatMap(number => {
		return COLORS.flatMap(color => {
			return SHAPES.flatMap(shape => {
				return SHADES.map(shade => {
					return new Card(color, shape, shade, number);
				})
			})
		})
	})
}

























