// Shape- superclass
function Shape(){
    this.x = 0; 
    this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
    this.x += x; 
    this.y += y;
    console.info("Shape moved");
    } 

// Rectangle - subclass
function Rectangle(){
   Shape.call(this); // call superclass construtor 
    }

// subclass extends superclass

Rectangle.prototype = Object.create(Shape.prototype);  // 这与`Rectangle.prototype = Shape.prototype`有什么区别--
//Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

rect instanceof Rectangle
rect instanceof Shape
rect.move(1, 1);

