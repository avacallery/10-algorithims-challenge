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

  prices.forEach((toy, index) => {
    priceTotal += toy;
    if (priceTotal <= budget) {
      totalToys = index + 1;
    }
  });
  return totalToys;
}

maximumToys([1, 12, 5, 111, 200, 1000, 10], 50);
