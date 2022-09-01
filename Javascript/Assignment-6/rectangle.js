// Perform the following operations to provide the implementation for a
// Rectangle class. The operations are:
// 1. Add an area() method to the Rectangle class.
// 2. Create a Square class that satisfies the following conditions:
// ○ It is a subclass of Rectangle.
// ○ It contains a constructor and no other methods.
// ○ It can use the Rectangle class' area method to print the area
// of a Square object.

// Rectangle Class
class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
    }

    getArea() {
        return this.length * this.breadth;
    }
}

// Square Class
class Square extends Rectangle {
    constructor(length) {
        super(length, length);
        this.length = length;
    }
}

// Main
let rectangle = new Rectangle(2, 4);
console.log(rectangle.getArea());

let square = new Square(2);
console.log(square.getArea());