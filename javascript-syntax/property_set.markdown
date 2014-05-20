##set



###简介
 - 绑定一个对象属性给一个函数， 当设置属性时函数被调用


###语法


```
{
    set prop(val) {
        ...
    }    
}
```


###参数
 - prop: 属性名对应的函数
 - val: 赋给prop的值


###描述
 - 一个指明的属性值改变时， 可以用set去改变。 


###例子
 - 通过set操纵符定义一个setter. 这会定义一个伪属性 current, 当被赋值时， 将会升级log的值 

```
var o = {
    log: ['fefe'],
    get current () {
        return this.log[this.log.length - 1]; 
    },
    set current (str) {
        return this.log[this.log.length - 1] = str;    
    }    
}

console.log(o.current); // 输出 "fefe"
o.current = 9;
console.log(o.current); // 输出 9
delete o.current;
console.log(o.current); // 输出 undefined
```


 - 通过delete 操作符 移除setter


```
delete o.current;
```

