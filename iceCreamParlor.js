// cost = array of integers representing price of flavor
// money = integer representing budget

// Epic: Find the ID numbers (index -> starts at 1) of the two flavors of ice cream Sunny and Johnny can purchase with their exact budget

// iterate through array of ice cream prices starting at index 1
// compare the current and next iteration
// return indices if integers equal to budget
// Print two integers denoting the indices for the two flavors

// function whatFlavors(cost, money) {
//   let flavorIndices = [];
//   cost.forEach((flavorCost, index) => {
//     index = index + 1;
//     cost.forEach((flavorCostTwo, indexTwo) => {
//       indexTwo = indexTwo + 1;
//       if (flavorCost + flavorCostTwo === money && index !== indexTwo) {
//         flavorIndices.push([index, indexTwo]);
//       }
//     });
//   });
//   flavorIndices = flavorIndices[0].sort((a, b) => a - b).join(' ');
//   console.log(flavorIndices);
// }
// whatFlavors([1, 4, 5, 3, 2], 4);

function whatFlavors(cost, money) {
  for (let i = 0; i < cost.length; i++) {
    for (let j = 0; j < cost.length; j++) {
      if (cost[i] + cost[j] === money && i !== j) {
        console.log([i + 1, j + 1].sort((a, b) => a - b).join(' '));
        return;
      }
    }
  }
}
whatFlavors([1, 4, 5, 3, 2], 4);
