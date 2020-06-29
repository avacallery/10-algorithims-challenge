function getGrade(grade) {
  if (grade <= 30 && grade > 25) {
    return 'A';
  }

  if (grade <= 25 && grade > 20) {
    return 'B';
  }
  if (grade <= 20 && grade > 15) {
    return 'C';
  }
  if (grade <= 15 && grade > 10) {
    return 'D';
  }
  if (grade <= 10 && grade >= 5) {
    return 'E';
  }
  if (grade <= 5 && grade > 0) {
    return 'F';
  } else {
    return grade;
  }
}

console.log(getGrade(24));
