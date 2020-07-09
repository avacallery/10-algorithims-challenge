// Complete the migratoryBirds function - It should return the lowest type number of the most frequently sighted bird.

function migratoryBirds(arr) {
  //initialize bird types (1-5) in order to use ++
  let birdSpecies = [0, 0, 0, 0, 0];
  let countBirdType = 0;
  let maxId = 0;

  arr.forEach((bird) => {
    birdSpecies[bird - 1]++;
  });

  // forEach
  // benefit: touch every item in the collection

  birdSpecies.forEach((type, index) => {
    if (type > countBirdType) {
      countBirdType = type;
      maxId = index + 1;
    }
  });

  // forLoop solution
  // benefits: you can change how you increment
  // break - can exit out of the loop early
  // continue - resumes the loop

  //   for (let i = 0; i < birdSpecies.length; i++) {
  //     if (birdSpecies[i] > countBirdType) {
  //       countBirdType = birdSpecies[i];
  //       maxId = i + 1;
  //     }
  //   }

  return maxId;
}

console.log(migratoryBirds([1, 2, 3, 4, 2, 2, 5, 5]));
