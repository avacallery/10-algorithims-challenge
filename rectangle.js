// Complete the function: it has two parameters: a and b. It must return an object modeling a rectangle with the following properties:
// length = a
// width = b
// perimeter = 2 * (a + b)
// area = a * b

function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = 2 * (a + b);
  this.area = a * b;
}

console.log(Rectangle(4, 5));
