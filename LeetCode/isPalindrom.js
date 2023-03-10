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

console.log(isPalindrome(-400204));