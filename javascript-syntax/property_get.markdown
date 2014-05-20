##get


###简介
 - 绑定一个对象属性给函数， 查找此属性时， 函数被调用. get 操作符始于 Javascript 1.8.5


###语法
 
```
{
    get prop () {
        ...    
    }    
}
```


###参数
 - prop: 属性名对应的函数 



###描述
 - 需求: 获得一个属性值， 其值是动态计算得出的， 或者不需要调用特定方法而通过一个值反应内部变量的状态。


###例子

 - 通过get 操作符定义 getter
```
var log = ['test'];
var obj = {
    get latest() {
        if (log.length == 0) return undefined;    
        return log[log.length - 1];
    }    
}

console.log(obj.latest); // 输出 "test"
obj.latest = 0;
console.log(obj.latest); // 仍然输出 "test"
```

**注意: 尝试去给latest赋值不会改变其值**

 - 通过delete操作符删除 getter


```
delete obj.latest;
console.log(obj.latest); // “undefined”
```


