// Epic: Given the location (x1, x2) and speed (v1, v2) of two kangaroos, print YES or NO if it is possible that they end up at the same location after the SAME number of jumps.

// x is POSITION
// v is SPEED

// Get rid of obvious cases:
// // If x1 > x2 and v1 > v2, automatic NO
// // If x2 > x1 and v2 > v1 automatic NO
// Find common denominator - multiples of v1 and v2 to make x1 === x2

function kangaroo(x1, v1, x2, v2) {
  let currentLocation1 = 0;
  let currentLocation2 = 0;
  let hopCounter = 0;

  if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) {
    return 'NO';
  } else {
    while (currentLocation2 !== currentLocation1) {
      hopCounter++;
      currentLocation1 === x1 + v1 * hopCounter;
      currentLocation2 === x2 + v2 * hopCounter;
      console.log(hopCounter);
      console.log(currentLocation1, currentLocation2);
      if (currentLocation2 === currentLocation1) {
        return 'YES';
      }
    }
  }
}

console.log(kangaroo(0, 3, 4, 2));
