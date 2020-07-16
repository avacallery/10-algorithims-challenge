// angryProfessor function must return 'YES' if class is cancelled, or 'NO'
// minStudents is the threshold number of students for class to go on
// arrivalTimes is an array of integers representing arrival times (class size)

function angryProfessor(minStudents, arrivalTimes) {
  arrivalTimes = arrivalTimes.filter((time) => time <= 0);
  //   if (arrivalTimes.length >= minStudents) {
  //     return 'NO';
  //   }
  //     return 'YES';

  return arrivalTimes.length < minStudents ? 'YES' : 'NO';
}

console.log(angryProfessor(3, [-1, 3, 2, 0, 0]));
