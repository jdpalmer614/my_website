
const colorArray = ['red', 'green', 'blue'];
const shapeArray = ['diamond', 'oval', 's'];
const shadeArray = ['fill', 'none', 'striped'];
const numberArray = [1, 2, 3];

const gameBoard = document.querySelector("#full-deck-display");

for (let color of colorArray) {
  for (let shape of shapeArray) {
    for (let shade of shadeArray) {
      for (let number of numberArray) {
        const cellElement = document.createElement('div');
        cellElement.classList.add('card');
        cellElement.id = 0;
        cellElement.setAttribute('data-color', color);
        cellElement.setAttribute('data-shape', shape);
        cellElement.setAttribute('data-shade', shade);
        cellElement.setAttribute('data-number', number);

        for (let i = 0; i < number; i++) {
          const pipElement = document.createElement('div');
          pipElement.classList.add('pip');
          cellElement.appendChild(pipElement);
        }

        gameBoard.appendChild(cellElement);
      }
    }
  }
}
