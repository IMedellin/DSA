/// O(n^2)
const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) { //2nd to last element. By the last element, the array will be sorted
    let lowestValueIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[lowestValueIndex] > array[j]) {
        lowestValueIndex = j;
      }
    }
    if (lowestValueIndex != i) {
      let currentIteration = array[i] // keep track of current iteration and its value. 
      array[i] = array[lowestValueIndex];
      array[lowestValueIndex] = currentIteration
    }
  }
  return array
};

console.log(selectionSort([11, 4, 6, 2, 9]));