ObjMaker = function() {this.a = 'first';};
// ObjMaker is just a function, there's nothing special about it that makes 
// it a constructor.

ObjMaker.prototype.b = 'second';
// like all functions, ObjMaker has an accessible prototype property that 
// we can alter. I just added a property called 'b' to it. Like 
// all objects, ObjMaker also has an inaccessible [[prototype]] property
// that we can't do anything with

SubObjMaker = function () {
    ObjMaker.call(this);
};
SubObjMaker.prototype = Object.create(ObjMaker.prototype); // note: this pattern is deprecated!
// Because we used 'new', the [[prototype]] property of SubObjMaker.prototype
// is now set to the object value of ObjMaker.prototype.

SubObjMaker.prototype.c = 'third';  
obj2 =  SubObjMaker();
// [[prototype]] property of obj2 is now set to SubObjMaker.prototype
// Remember that the [[prototype]] property of SubObjMaker.prototype
// is ObjMaker.prototype. So now obj2 has a prototype chain!
// obj2 ---> SubObjMaker.prototype ---> ObjMaker.prototype

console.log(typeof(obj2));
// returns 'third', from SubObjMaker.prototype

// returns 'second', from ObjMaker.prototype

