// Complete the countingValleys function below.
// It's taking an integer and a string and then printing a single integer
function countingValleys(n, s) {
  let valleysTraveled = 0;
  let hikersAltitude = 0;

  // Break up string into each letter in array
  let sArray = s.split('');

  sArray.forEach((step) => {
    if (hikersAltitude === 0 && step === 'D') {
      valleysTraveled++;
    }

    step === 'D' ? hikersAltitude-- : hikersAltitude++;
  });

  return valleysTraveled;
}
console.log(countingValleys(8, 'DDUUDDUDUUUD'));
