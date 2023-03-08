const isPalindrome = (string) => {
  const modifiedString = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let left = 0;
  let right = modifiedString.length - 1;
  let middle = Math.floor(modifiedString.length / 2);
  console.log(modifiedString)
  while (left <= middle) {
    if (modifiedString[left] !== modifiedString[right]) {
      return false;
    } else {
      right--
      left++
    }
  }
  return true;
};
console.log(isPalindrome('kayak'))
console.log(isPalindrome('race  car'));
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome('deified'))