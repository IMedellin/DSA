//O(n^2) Way slower compared to selectionSort in the case of operations performed. 
const bubbleSort = (array) => {
  let lastIndex = array.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < lastIndex; i++) {

      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1], array[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return array
};

console.log(bubbleSort([11, 4, 6, 2, 9, 12]))