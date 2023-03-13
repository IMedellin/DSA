var twoSum = function (nums, target) {
  const map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]; //variable for nums values at index
    let subtractedTarget = target - nums[i];// subtract the target from the current value. 17 - 2 = 15....17-7 = 10....
    console.log(map, subtractedTarget)
    if (map.has(subtractedTarget)) { //if map has 15, 10, 6, 2 at a key then
      result[0] = map.get(subtractedTarget); //add subtractedTarget index into first index of result array
      result[1] = i//add the current index as the 2nd index in the array
      return result;
    }
    map.set(num, i) // value as key: index as value BECAUSE we are returning the indices as the answer to the problem
  }
};

console.log(twoSum([2, 7, 11, 15], 17))