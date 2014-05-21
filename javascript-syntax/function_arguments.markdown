##arguments


###描述
 - arguments 对象是个函数内的本地变量；arguments已不能作为Function的属性使用了。
 - 使用arguments对象可以引用函数的参数。如果一个函数有3个参数，你可以这样表示:

 ```
 arguments[0]
 arguments[1]
 arguments[2]
 ```

arguments也可以被赋值:

```
function funa (a, b, c) {
    console.log(a, b, c);
    arguments[1] = 'dd';
    console.log(a, b, c)
}

funa(3, 4, 5);
```
 - arguments对象不是数组。与数组唯一相似的地方是有length属性。但是可以被转为一个真正的数组:


 ```
 var args = Array.prototype.slice.call(arguments);
 // or
 var args = [].slice.call(arguments);
 ```


###属性
 - arguments.callee: 对当前执行函数的引用
 - arguments.length: 参数数目


