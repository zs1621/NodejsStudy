##reduce 方法
 - 对数组中的所有元素调用指定的回调参数。该回调函数的返回值作为累积结果，并且此返回值在下次调用该回调函数时作为参数提供。


###形式

```
array.reduce(callbackfn [, initialValue])
```


###参数

 - array ： 必需。一个数组对象
 - callbackfn ： 必需。一个最多接收4个参数的回调函数。对于数组中的每个元素，reduce方法都会调用calbackfn函数一次
 - initalValue ： 可选。如果指定initialValue,则它将用作初始值来启动累积。


###返回值
 - 通过最后一次调用回调函数获得的累积结果



###例子 来自[node-only](https://github.com/visionmedia/node-only)
```
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

/*
输出
{ name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com' }
*/
console.log(only(obj, 'name last email'))
```


####说下回调函数，具体的语法

```
function callbackfn(previousValue, currentValue, currentIndex, array)
```


####参数

 - previousValue : 通过上一次调用回调函数获得的值。如果reduce提供了initalValue, 则在首次调用时， previousValue 为 initalValue, currentValue 为第一个值; 如果reduce为提供initalValue, 则在首次调用时， previousValue 为 数组第一个值, currentValue 为第二个.
 - currentValue : 当前数组元素的值
 - currentIndex: 当前数组元素的索引
 - 包含该元素的数组对象

