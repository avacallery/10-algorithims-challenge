// Complete the countingValleys function below.

function countingValleys(steps, direction) {
  let valleysTraveled = 0;
  let hikersAltitude = 0;
  // Break up string into each letter in array
  direction.split('').forEach((direction) => {
    //calculate if valley was traveled into
    if (hikersAltitude === 0 && direction === 'D') {
      valleysTraveled++;
    }
    //keep track of altitude
    direction === 'D' ? hikersAltitude-- : hikersAltitude++;
  });
  return valleysTraveled;
}
console.log(countingValleys(8, 'DDUUDDUDUUUD'));
