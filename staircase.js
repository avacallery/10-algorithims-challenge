// create staircase
// base and height must be the same ( n ) and made up of (#'s)
// for each denoting level, each line denotes 1 less (#) and one space

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}

staircase(4);
