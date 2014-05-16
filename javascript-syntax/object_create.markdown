
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

Rectangle.prototype = Object.create(Shape.prototype);  // 这与`Rectangle.prototype = Shape.prototype`有什么区别--
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
mixin(MyClass.prototype, OtherSuperClass.prototype); //mixin [http://www.cnblogs.com/snandy/archive/2013/05/24/3086663.html]

MyClass.prototype.myMethod = function() {
   // do a thing 
    }
```

### Object.create(null)

 - 传入null给Object.create, 可以创建没有继承任何东西的对象。


```
function Shape() {
}

Shape.prototype = Object.create(null);

var shape = new Shape();

// 输出 "undefined"
console.log(shape.toString);
```

 - 注意上面的例子不同于下面的 :


```
function Shape() {
};
Shape.prototype = null;
var shape = new Shape();
// 输出 "[Function: toString]"
console.log(shape.toString);
```

 - 当然你会想， 为毛这样用? 
   - 可以避免[问题](http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/)
   - 性能问题。Object.create(null)比对象遍历更快。

### 使用 `properitesObject` 元素

```
var o;
// create an object with null as prototype
o = Ojbect.create(null);


o = {};
// is equivalent to:
o = Object.create(Ojbect.prototype);


// 下面的例子举了几个简单的属性
o = Object.create(Object.prototpe, {
    foo: { writable: true, configurable: true, value: "hello"},
    bar: {
        configurable: false,
        get: function() { return 10 },
        set: function(value) { console.log("Setting ``");}
        }
    });

function Constructor(){
    o = new Constructor();
    }

// is equivalent to:
o = Object.create(Constructor.prototype);
// 当然， 如果

// 创建一个新的对象其属性是一个新的空的对象
// 加一个唯一的属性 p , 其值为42


o = Ojbect.create({}, {p: { value: 42}})

//默认属性是 不可写， 不可枚举， 不可设置的
o.p = 24;
o.p # 42
o.q = 12
for (var prop in o) {
   console.log(prop) 
    }

// "q"

o2 = Object.create({}, {
    p: {
       value: 42, 
       writable: true,
       enumerable: true,
       configurable: true
        } 
    });
```

##**Polyfill**
TBC
