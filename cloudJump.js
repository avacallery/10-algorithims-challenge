// Emma can jump on any cloud (0)
// Clouds that are numbered (1) must be avoided.
// For the clouds she can step on, the index in the array must be equal to the number of the current cloud index plus 1 or 2
// so she can only ever skip (1) cloud at a time?

// objective: print the minimum number of jumps needed to win the game

function jumpingOnClouds(clouds) {
  let totalMoves = 0;

  for (let i = 0; i < clouds.length; i++) {
    clouds[i + 2] ? (totalMoves++, i++) : (totalMoves++, (i += 2));
  }
  //   clouds[i + 2] ? (totalMoves++, i++) : (totalMoves++, (i += 2));
  // }

  // clouds.forEach((cloud, index) => {
  //   if (cloud === 0 && clouds[index + 1]) {
  //   }
  console.log(totalMoves++);
  return totalMoves;
}

jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);

// array index 0, 1, 2, 3, 4, 5
// 10, 0 0 1 0 0 0 0 1 0 0 --> expected 6 moves
