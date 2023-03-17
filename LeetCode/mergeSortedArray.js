var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1

  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let firstValue = nums1[first];
    let secondValue = nums2[second];

    if (firstValue > secondValue) {
      nums1[i] = firstValue
      i--
      first--
    } else {
      nums1[i] = secondValue;
      i--
      second--
    }
  }
  return nums1
}


console.log(merge([1, 2, 3, 0, 0, 0, 0], 3, [2, 4, 5, 6], 4))//output [1,2,2,3,5,6] <--- is nums1 array merged with nums2 array
console.log(merge([0], 0, [1], 1))//output [1,2,2,3,5,6] <--- is nums1 array merged with nums2 array
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3))//output [1,2,2,3,5,6] <--- is nums1 array merged with nums2 array
console.log(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5))//output [1,2,2,3,5,6] <--- is nums1 array merged with nums2 array
