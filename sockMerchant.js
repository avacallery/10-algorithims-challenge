// Determine how many pairs of socks with matching colors there are
// numberOfSocks: the number of socks in the pile
// typeOfSock: the colors of each sock (by number)

// Return the total number of matching pairs

function sockMerchant(numberOfSocks, typeOfSock) {
  let sockPairs = 0;
  let sortedSocks = typeOfSock.slice().sort();

  sortedSocks.filter((sock, index) => {
    if (sock === sortedSocks[index + 1]) {
      sortedSocks.shift();
      sockPairs++;
    }
  });

  return sockPairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
