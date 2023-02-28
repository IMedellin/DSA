//O(n)
const hasDuplicateValue = (array) => {
  const valueIndexArray = []; //put an arbitrary value (1) at the index === to the value; if value is 3 place a (1) at index 3;

  for (let i = 0; i < array.length; i++) {
    if (valueIndexArray[array[i]] === 1) {
      return "Has duplicate value";
    } else {
      valueIndexArray[array[i]] = 1;
    }
  }
  return "No duplicate value";
};

//O(n)
const hasDuplicateValue2 = (array) => {
  const checkDuplicateValue = {};
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    if (!checkDuplicateValue.hasOwnProperty(currentElement)) {
      checkDuplicateValue[currentElement] = 1;
    } else {
      return "Has duplicate value";
    }
  }
  return "No duplicate value";
}

console.log(hasDuplicateValue([2, 4, 6, 8, 10, 12, 2]));
console.log(hasDuplicateValue2([2, 4, 6, 8, 10, 12, 2]));
