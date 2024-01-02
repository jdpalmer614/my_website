
/* 
   This function will generate x number of distinct whole numbers in a given range. 
   So if you give the function (3, [0, 10]),
   it will generate 3 disitinct numbers in the range of [0, 10]
*/

export function generateRandomDistinctNumbers(x, min, max) {
    if (x > (max - min + 1) || max < min) {
        // Invalid input, cannot generate the requested number of distinct numbers in the given range
        return null;
    }

    let result = [];
    while (result.length < x) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        if (result.indexOf(randomNum) === -1) {
            // Ensure the generated number is not already in the result array
            result.push(randomNum);
        }
    }

    return result;
}

export function removeElementsFromArray(sameArray, diffArray) {
    // Use the filter method to create a new array containing only elements not found in array2
    const resultArray = sameArray.filter(element => !diffArray.includes(element));

    // Modify array1 in place
    sameArray.length = 0; // Clear the original array
    sameArray.push(...resultArray); // Push the elements from the result array to array1
}

// Function to get a random item from an array
export function getRandomItem(array) {
  // Get the length of the array
  const arrayLength = array.length;

  // Generate a random index within the array length
  const randomIndex = Math.floor(Math.random() * arrayLength);

  // Retrieve the item at the random index
  const randomItem = array[randomIndex];

  // Return the randomly selected item
  return randomItem;
}



export function updateValues(randomColor, randomShape, randomShade, randomNumber, sameArray, items) {
    if (sameArray.includes(0)) {
        randomColor = getRandomItem(items[0]);
    }
    if (sameArray.includes(1)) {
        randomShape = getRandomItem(items[1]);
    } 
    if (sameArray.includes(2)) {
        randomShade = getRandomItem(items[2]);
    } 
    if (sameArray.includes(3)) {
        randomNumber = getRandomItem(items[3]);
    }

  return {
    randomColor,
    randomShape,
    randomShade,
    randomNumber
  };
}


