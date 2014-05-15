function Shape() {
  this.x = 0;
  this.y = 0;
  console.log('Shape constructor called');
}

Shape.prototype = {
    move: function(x, y) {
    this.x += x;
    this.y += y;
    console.log('fefe');
    console.log(x);
}
};

// Rectangle
function Rectangle() {
  console.log('Rectangle constructor called');
  Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
a = Rectangle();
a.move(4, 5);
