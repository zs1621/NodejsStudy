
function Shape() {
  this.x = 0;
  this.y = 0;
  this.b = 5;
  console.log('Shape constructor called');
}

Shape.prototype = {
  move: function(x, y) {
    this.x += x;
    this.y += y;
  }
};

// Rectangle
function Rectangle() {
  console.log('Rectangle constructor called');
  Shape.call(this);
  this.c = 0;
}

Rectangle.prototype = Object.create(Shape.prototype);
//Rectangle.prototype.constructor = Rectangle;

a = new Rectangle();
a.move(4,5);
console.log(a.c);
console.log(a instanceof Shape);
console.log(a instanceof Rectangle);
console.log(a.constructor == Object);
//console.log(Shape.prototype == )
//console.log(a.constructor == Shape );
