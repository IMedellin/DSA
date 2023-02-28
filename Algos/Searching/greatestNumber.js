//O(n)
const greatestNumber = (array) => {
  let current = array[0];
  for (let i = 1; i < array.length; i++) {
    let nextElement = array[i];
    if (current <= nextElement) {
      current = nextElement;
    }
  }
  return current
};


console.log(greatestNumber([2222, 3, 4, 500, 44, 55, 2, 231, 500, 501, -21]))