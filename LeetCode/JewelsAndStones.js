const numJewelsInStones = (jewels, stones) => {
  let count = 0;
  const map = new Map()
  for (let i = 0; i < jewels.length; i++) {
    map.set(jewels[i], true)
  }

  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) {
      count++
    }
  }
  return count
};

console.log(numJewelsInStones('aA', "aAAbbbb"))


/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/