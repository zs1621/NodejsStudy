function Shape() {
}

Shape.prototype = Object.create(null);

var shape = new Shape();

console.log(shape.toString);

