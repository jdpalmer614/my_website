
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

   getCard(index) {
   	return this.cards[index]; 
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

























