const removeDuplicates = function (nums) {
  let i = 0;
  let j = i + 1;
  let result = 1;
  while (j < nums.length) {
    if (nums[i] < nums[j]) {
      let temp = nums[j]; // 1
      nums[j] = "";
      j++;
      nums[i + 1] = temp;
      i++

      result += 1
    } else {
      nums[j] = "";
      j++
    }
  }
  return `${result}, nums = ${nums}`
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // ---> [0,1,2,3,4,_,_,_,_,_] as long as unique elements are present in order in the array
console.log(removeDuplicates([0, 1, 1, 2, 2, 3, 3, 3])) // ---> [0,1,2,3,_,_,_,_] as long as unique elements are present in order in the array
console.log(removeDuplicates([1, 1, 2])) // ---> [1,2,_] as long as unique elements are present in order in the array
console.log(removeDuplicates([0, 0, 1, 1, 2, 2, 3, 3, 3])) // ---> [0,1,2,3,_,_,_,_,_] as long as unique elements are present in order in the array
