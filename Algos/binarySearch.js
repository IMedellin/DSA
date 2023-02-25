// O(n)
const regArray = [17, 3, 75, 202, 80, 87, 203, 245, 265, 266, 309];
const linearSearch = (array, element) => {
    let steps = 0;
    for (let i = 0; i < array.length; i++) {
        steps = i + 1
        if (array[i] === element) {
            return i + ` Linear Search Steps: ${steps}`
        }
    }
    return `Not found Steps: ${steps}`
}
// O(log n)
const orderedArray = [3, 17, 75, 87, 203, 245, 265, 266, 275, 309]
const binarySearch = (array, element) => {
    let steps = 0;
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let midPoint = Math.floor((start + end) / 2);
        let middleValue = array[midPoint];
        steps += 1
        if (element === middleValue) {
            return midPoint + " Binary Search steps: " + steps;
        } else if (element < middleValue) {
            end = midPoint - 1;
        } else if (element > middleValue) {
            start = midPoint + 1;
        }
    }
    return "NOT FOUND " + `Binary search steps: ${steps}`
}



console.log(linearSearch(regArray, 75))
console.log(linearSearch(regArray, 309))
console.log(binarySearch(orderedArray, 900))
console.log(binarySearch(orderedArray, 245))
