// Epic: Find the maximum amount of toys (prices array) Mark can purchase with k dollars.

// maximumToys has the following parameters:
// // prices: an array of integers
// // budget: single integer

// .sort() prices as ascending values
// iterate through prices
// add prices together until we reach our budget limit
// return how many toys Mark can buy

function maximumToys(prices, budget) {
  prices = prices.sort((a, b) => a - b);
  let priceTotal = 0;
  let totalToys = 0;
  // assign index for while loop
  let index = 0;

  // // SOLUTION USING FOR EACH
  //   prices.forEach((toy, index) => {
  //     priceTotal += toy;
  //     if (priceTotal <= budget) {
  //       totalToys = index + 1;
  //     }
  //   });

  while (priceTotal <= budget && index < prices.length) {
    priceTotal += prices[index++];
    if (priceTotal <= budget) {
      totalToys += 1;
    }
  }
  return totalToys;
}

//   // Solution using for loop and break
//   // loop through until you reach budget and break out if it goes over the butdget
//   prices = prices.filter((price) => budget > price);
//   prices.sort((a, b) => a - b);

//   let toyCount = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (budget >= prices[i]) {
//       toyCount++;
//       budget -= prices[i];
//     } else {
//       break;
//     }
//   }
//   console.log(toyCount);
//   return toyCount;
// }
maximumToys([1, 12, 5, 111, 200, 1000, 10], 50);
