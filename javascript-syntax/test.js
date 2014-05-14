function list() {
  console.log(arguments);
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
console.log(list1);

//  Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]


var only = function(obj, keys) {
    obj = obj || {};    
    if ( 'string' == typeof keys ) keys = keys.split(/ +/);
    return keys.reduce(function(ret, key){
        if (null == obj[key])  return ret;    
        ret[key] = obj[key];
        return ret;
    }, {});
}

var obj = {
    name: 'tobi',
    last: 'holowaychuk',
    email: 'tobi@learnboost.com',
    _id: '121345'
};

// 输出 
console.log(only(obj, 'name last email'))

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

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log(rect instanceof Rectangle);
console.log(rect instanceof Shape);
console.log(rect.constructor);
rect.move(1, 1);

