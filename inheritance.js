// Add an area method to Rectangle's prototype.
// Create a Square class that satisfies the following:
// It is a subclass of Rectangle.
// It contains a constructor and no other methods.
// It can use the Rectangle class' area method to print the area of a Square object.
// Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.

//SUPER
//The super keyword refers to the parent class.
// It is used to call the constructor of the parent class and to access the parent's properties and methods.

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function () {
  return this.w * this.h;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
  constructor(height, width) {
    super(height, width);
    this.h = height;
    this.width = width;
  }
}
