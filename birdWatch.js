// Complete the migratoryBirds function - It should return the lowest type number of the most frequently sighted bird.

function migratoryBirds(arr) {
  let birdSpecies = [0, 0, 0, 0, 0];
  let countBirdType = 0;
  let maxId = 0;

  arr.forEach((bird) => {
    birdSpecies[bird - 1]++;
  });

  for (let i = 0; i < birdSpecies.length; i++) {
    if (birdSpecies[i] > countBirdType) {
      countBirdType = birdSpecies[i];
      maxId = i + 1;
    }
  }
  return maxId;
}

console.log(migratoryBirds([1, 2, 3, 4, 2, 2, 5, 5]));
