const isPalindrome = (x) => {
  //Check for negative numbers, if negative number then return false.
  if (x < 0) {
    return false;
  }
  //Convert to string and set up pointers
  const strNum = String(x);
  let i = 0;
  let last = strNum.length - 1;
  let mid = Math.floor(strNum.length / 2);


  while (i < mid) {
    //if the first element DOES NOT match the last element then return false. As it is not a palindrome at first match
    if (strNum[i] !== strNum[last]) {
      return false
    } else if (strNum[i] == strNum[last]) { //if first "test" passed continue with rest of string
      i++
      last--
    }
  }
  //if while loop completes, then string is palindrome and return true.
  return true
};
console.log(isPalindrome(500209));
console.log(isPalindrome(500005));
console.log(isPalindrome(5006005))




//BONUS
//<-------------------------------------------------------------Bottom below attacks the problem WITHOUT converting the integer to a string------------------------------------------------------------------------->

const isPalindrome2 = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) { //Check all edge cases if x is negative return false; if x / 10 and remainder is 0 AND x does not equal 0 return false. 
    return false
  }
  let reversed = 0; // reversed is going to take the last half of digits and compare with the first half of digits

  while (reversed < x) { //run while loop as long as reversed is less than x
    reversed = reversed * 10 + (x % 10); //the reversed variable "grabbing" the last digit of the number. 9...90...902
    x = Math.floor(x / 10) // This removes the last digit in the number Math.Floor(500209 / 10) ---> 50020...5002...500
    console.table([x, reversed]) //<---- For reference
  }

  return x === reversed || x === Math.floor(reversed / 10) // compare x and reversed.... IF x is a odd number divide out the last number... execute the statement for x in while loop
}

console.log(isPalindrome2(500209));
console.log(isPalindrome2(500005));
console.log(isPalindrome2(5006005))
