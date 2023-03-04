const arrayDiff = (array1, array2) => {
  return array1.filter(number => !array2.includes(number))
}
/*
It should remove all values from array1, which are present in array2 keeping their order.
If a value is present in array2, all of its occurrences must be removed from the other:
*/

console.log(arrayDiff([1, 1, 1, 2, 2, 2, 3], [1, 3]))
console.log(arrayDiff([1, 1, 1, 2, 2, 2, 3], [2, 3]))
console.log(arrayDiff([1, 1, 1, 2, 2, 2, 3], [2])) // ---> [1, 1, 1, 3]
console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 1, 1, 2, 2, 2, 3], []))