

##**简述**
 *concat()*方法 返回一个新的数组。 这个新的数组是原来的数组加上新的数组或值组成。


##**语法**


```
arr.concat(value1, value2, ..., valueN);
```


###**参数**
 - valueN: 数组或者值连接到原数组末尾


##**描述**
 

concat 方法并不修改调用它的对象(this指向的对象) 和参数中的各个数组本身的值， 而是将他们的每个元素浅拷贝到新的数组里。原数组按如下的规则拷贝到新的数组: 

 - 对象引用: concat 拷贝引用到新的数组。 原数组和新数组都指向相同的对象。也就是说， 如果实际的被引用对象被改变， 新数组和原数组都会改变。
 - 字符串和数字: concat 复制strings和numbers的值到新的数组 


##**例子**

 - **连接2个数组, 连接值**

```
var a = ["a", "b", "c"];

var numberic = [1, 2, 3];
var anumberic = a.concat(numberic);
// 输出 [ 'a', 'b', 'c', 1, 2, 3 ]
console.log(anumberic);
var bnumberic = anumberic.concat(3, [4, 5]);
// 输出 [ 'a', 'b', 'c', 1, 2, 3, 3, 4, 5 ]
console.log(bnumberic);
```
