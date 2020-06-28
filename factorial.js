//Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(5));
