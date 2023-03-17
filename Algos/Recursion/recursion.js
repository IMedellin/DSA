//-----Simple example to how recursion works in javascript

//Given a number countdown to 0


//Without recursion
const countdownFrom = (num) => {
  for (let i = num; i >= 0; i--) {
    console.log(i)
  }
}


//With recursion
const countdownFrom1 = (num) => {
  console.log(num)
  if (num === 0) {
    return;
  } else {
    countdownFrom(num - 1)
  }
}

console.log(countdownFrom(10))
countdownFrom1(10);



/*
These two function provide the same funcionality however countdownFrom1 uses recursion instead of a for loop.
*/