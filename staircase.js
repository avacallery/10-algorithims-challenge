// create staircase
// base and height must be the same ( n ) and made up of (#'s)
// for each denoting level, each line denotes 1 less (#) and adds one space

// we use a for loop instead of forEach because we are working with an integer and not an array

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}

staircase(6);

// second solution
// build array and replace one character at a time

// const staircase = (n) => {
//   let arr = [];

//   for (let x = 0; x < n; x++) {
//     arr.push(' ');
//   }

//   for (x = n; x >= 0; x--) {
//     arr[x] = '#';
//     console.log(arr.join(''));
//   }
// };

// staircase(10);
