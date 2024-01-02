
/* 
 the shuffleArray function is used to shuffle 
 the elements within an array using the Fisher-Yates shuffle algorithm.
*/

export function shuffleArray(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function shuffleArrays(arrays) {
    for (let i = 0; i < arrays.length; i++) {
        shuffleArray(arrays[i]);
    }
}
