const regArray = [17, 3, 75, 202, 80, 87, 203, 245, 265, 266, 309];
const linearSearch = (array, element) =>{
    let steps = 0;
    for(let i=0; i < array.length; i++){
        steps = i
        if(array[i] === element){
            return array[i] + ` Linear Search Steps: ${steps}`
        }
    }
    return `Not found Steps: ${steps}`
}

const orderedArray = [3, 17, 75, 87, 203, 245, 265, 266, 275, 309, 555]
const binarySearch = (array, element) =>{
    let steps = 0;
    let start = 0;
    let end = array.length - 1;
    while(start < end){
        let mid = Math.floor((start + end) / 2);
        if(array[mid] === element){
            steps += 1;
            return `${array[mid]} Binary Search Steps: ${steps}`; 
        }else if(array[mid] > element){
            steps += 1
            end = mid;
            mid = (start + end) / 2
        }else if(array[mid] < element){
            steps += 1;
            start = mid; 
            mid = (start + end) / 2;
        }
    }
}



console.log(linearSearch(regArray, 75))
console.log(linearSearch(regArray, 309))
console.log(binarySearch(orderedArray, 309))
console.log(binarySearch(orderedArray, 75))
