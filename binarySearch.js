const regArray = [17, 3, 75, 202, 80];

const linearSearch = (array, element) =>{
    let steps = 0;
    let result;
    for(let i=0; i < array.length; i++){
        steps++;
        if(array[i] === element){
            result = element;
            return result + ` Steps: ${steps}`
        }
    }
}

console.log(linearSearch(regArray, 75))

