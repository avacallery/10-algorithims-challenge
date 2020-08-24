// Determine the minimum number of elements to delete to reduce array until all its elements are equal.
// Epic: Return an integer that denotes the MINIMUM number of deletions required.

// equalizeArray takes in the parameter arr: an array of integers

// how many of each duplicates?
// how many of other elements do we have to delete for there to only remain duplicates?
// what if the duplicates are equal? (ex: 3,3,3, 4,4,4)

function equalizeArray(arr) {
  duplicateCount = 0;

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      duplicateCount++;
    } else {
      break;
    }
  }
  console.log(duplicateCount);
  return duplicateCount;
}

equalizeArray([3, 3, 2, 1, 3]);
