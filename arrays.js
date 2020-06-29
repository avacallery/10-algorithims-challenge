// Complete the getSecondLargest function in the editor below. It has one parameter: an array, nums, of n numbers. The function must find and return the second largest number in nums.

//When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

function getSecondLargest(nums) {
  var secondLargest = nums.sort(function (a, b) {
    return b - a;
  })[1];
  console.log(nums);
  console.log(secondLargest);
}
getSecondLargest([1, 2, 3, 5, 6]);
