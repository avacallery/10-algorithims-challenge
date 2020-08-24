// K number of allowed important losses
// L[i] array of luck values
// T[i] array of importance( 0 or 1 )

// loop through contests and decide if each one is a win or loss
// always lose a zero
// assume loss and add luck balance for zero
// create new array of sorted 1 values

// loop through new array from highest to lowest
// subtract first k values, add the remaining values

const luckBalance = (k, contests) => {
  let maxPossibleLuck = 0;
  let importantContests = [];

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      maxPossibleLuck += contests[i][0];
    } else {
      importantContests.push(contests[i][0]);
    }
  }

  importantContests.sort(function (a, b) {
    return b - a;
  });

  for (let i = 0; i < importantContests.length; i++) {
    if (i < k) {
      maxPossibleLuck += importantContests[i];
    } else {
      maxPossibleLuck -= importantContests[i];
    }
  }

  return maxPossibleLuck;
};

console.log(
  luckBalance(5, [
    [13, 1],
    [10, 1],
    [9, 1],
    [8, 1],
    [13, 0],
    [12, 0],
    [18, 0],
    [13, 0],
  ])
);
