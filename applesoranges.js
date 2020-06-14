// Complete the countApplesAndOranges function below.

// Fruit lands d units of distance from its tree
// Negative value of d means d units to the left of the tree, postive means d units to the right
// Given the value of d or m apples and n oranges, determine how many apples and oranges will fall on Sam's house ([s, t])
// Sam's house is between s = 7 and t = 10.
// Apple tree located at a = 4
// Orange tree located at b = 12
// There are m = 3 apples and n = 3 oranges
// apples = [2, 3, -4] units distance from a
// oranges = [3, -2, -4] units distance from b
// Adding each apple distance to the position of the tree, they land at [ 4 + 2, 4 + 3, 4 + -4] = [6, 7, 0] from a
// Oranges land [ 12 + 3, 12 + -2, 12 + -4 ] = [15, 10, 8] from b

function countFruit(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      appleCount += 1;
    }
  }
  for (let y = 0; y < oranges.length; y++) {
    if (b + oranges[y] >= s && b + oranges[y] <= t) {
      orangeCount += 1;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}

countFruit(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
