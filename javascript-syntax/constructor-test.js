function MyConstructor() {}

MyConstructor.prototype = {};
var myobject = new MyConstructor();
console.log(myobject.constructor == MyConstructor);

