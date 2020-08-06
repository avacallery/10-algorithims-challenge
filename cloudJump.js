// Emma can jump on any cloud (0)
// Clouds that are numbered (1) must be avoided.
// For the clouds she can step on, their placement in the array must be equal to the number of the cloud plus 1 or 2
// so she can only ever skip (1) cloud at a time?

// objective: print the minimum number of jumps needed to win the game

function jumpingOnClouds(clouds) {
  // count number of moves it takes to go through array
  // avoid all (1)'s
  let totalMoves = 0;

  for (let i = 0; i < clouds.length - 1; i++) {
    clouds[i + 2] ? (totalMoves++, i++) : (totalMoves++, (i += 2));
  }
  return totalMoves;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));

// array index 0, 1, 2, 3, 4, 5
