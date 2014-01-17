
*参考[developer.mozilla.org-Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)*

##**简介**

`Object.create()`方法用原型对象和其属性创建一个新的对象

##**语法**

```
Object.create(proto [, propertiesObject ])
```
 - **参数**
    - proto: 对象应该是之前创建的对象的原型  
    - propertiesObject: 如果指明了且undefined, 一个对象的可枚举属性会指定属性修饰符，用对应的属性名， 加到之前 创建的对象上。 这些属性对应了[Object.defineProperties]()
 - **异常**
   - 如果 proto参数不为null或者不是一个对象，就会抛出 `TypeError`异常


##**例子**

 - 用Object.create实现类继承

```
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

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

rect instanceof Rectangle
rect instanceof Shape
rect.move(1, 1);
```

如果想多重继承，mixins 是一个可选项。

```
function MyClass() {
   SuperClass.call(this); 
   OtherSuperClass.call(this);
    }

MyClass.prototype = Object.create(SuperClass.prototype); //inherit
mixin(MyClass.prototype, OtherSuperClass.prototype); //mixin \
[http://www.cnblogs.com/snandy/archive/2013/05/24/3086663.html]

MyClass.prototype.myMethod = function() {
   // do a thing 
    }
```


