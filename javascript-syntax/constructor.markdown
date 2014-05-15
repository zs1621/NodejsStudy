##constructor
  - javascript 每个对象都有个构造属性指向初始化对象的构造函数

##Two example 
 
```
function MyConstructor() {}
var myobject = new MyConstructor();
console.log(myobject.constructor == MyConstructor);
```

