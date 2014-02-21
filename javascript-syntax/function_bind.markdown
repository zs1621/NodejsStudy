来自[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 和 [msdn.microsoft.com/zh-cn/library/](http://msdn.microsoft.com/zh-cn/library/ff841995)

##**概况**


    function.bind()方法,对于给定的函数,创建一个绑定函数跟原函数有相同的函数体.在绑定函数中,this对象解析为传入的对象,且绑定函数有指明的初始参数



###**语法格式**


    function.bind(thisArg[,arg1[,arg2[, argN])


###**参数**

    - function
        - 必需， 一个函数对象
    - thisArg
        - 必需，可在新函数中为其引用this关键字的对象
    - arg1[, arg2[, argN]]]
        - 可选， 要传递到新函数的参数列表

###**返回值**

    与 function 函数相同的新函数， thisArg对象和初始参数除外.


###**异常**
    
    如果指定的 `function` 不是函数， 则将引发 **TypeError** 异常


###**例子**
    
    1. 创建一个绑定函数
```
this.x = 9;
var module = {
    x: 81,
    getX: function() { return this.x; }
    };

module.getX(); // 81

var getX = module.getX;
getX(); // 9, 此时， `this` 引用的时全局对象

// 创建一个新的函数 `this` 绑定到module
var boundGetX = getX.bind(module);
boundGetX(); // 81
```
    2. 参数使用

```

```
