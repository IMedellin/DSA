const numberFactorial = (num) => {
  if (num === 1) {
    return 1
  } else {
    num *= numberFactorial(num - 1)
  }
  return num
}

console.log(numberFactorial(10))

//Calculate factorial of a number