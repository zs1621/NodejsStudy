
function Shape() {
  this.x = 0;
  this.y = 0;
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
  this.x = 0;
  this.y = 0;
}

Rectangle.prototype = Object.create(Shape);
a = new Rectangle();
a[move(4,5)];
console.log(a instanceof Shape);
console.log(a instanceof Rectangle);
