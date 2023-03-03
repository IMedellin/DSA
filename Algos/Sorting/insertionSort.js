const insertionSort = (array) =>{
    for(let i = 1; i < array.length; i++){
        let current = array[i]; //value of array[i] for each loop. 2, 7, 3, 1
        let j = i - 1; // index of element to left of current. Start point to check values.

        while(j > -1 && current < array[j]){ //run loop while index is valid in array. j[-1] is not valid. AND while current value is less than < value at array[j]
            array[j + 1] = array[j]; //if conditions met array[j + 1] will take the value of array[j]. PUSHING the previous value into the next index
            j-- // decrement j to check other values and push if needed. When j is -1 i.e. not valid in array, end while loop
        }
        array[j + 1] = current //if while loop never runs OR while loop ends place the current value into front of the array or keep it in place. 
    }
    return array;
};

console.log(insertionSort([-2,4,2,7,7,1,10]))
console.log(insertionSort([24,1,2,7,8,1,12]))