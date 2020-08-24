// Epic: Given the location (x1, x2) and speed (v1, v2) of two kangaroos, print YES or NO if it is possible that they end up at the same location after the SAME number of jumps.

// x is POSITION
// v is SPEED

// Get rid of obvious cases:
// // If x1 > x2 and v1 > v2, automatic NO
// // If x2 > x1 and v2 > v1 automatic NO
// Find common denominator - multiples of v1 and v2 to make x1 === x2

// x1 + v2 * N = x2 + v2 * N
// x1 - x2 + v1 * N = v2 * N
// x1 - x2 = v2 * N - v1 * N
// x1 - x2 = N ( v2 - v1 )
// x1 - x2 / v2 - v1 = N
// If positive and if int, then kangaroos meet up

function kangaroo(x1, v1, x2, v2) {
  if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) {
    return 'NO';
  } else {
    return (x2 - x1) % (v2 - v1) === 0 ? 'YES' : 'NO ';
  }
}

console.log(kangaroo(0, 3, 4, 2));
