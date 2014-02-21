function *foo(){
    var bar = yield 'foo';
    console.log(bar);
    //console.log('fefef');
}

var gen = foo();
var curr = gen.next(); // 这里从执行到 yield 断开, foo -> curr.value

gen.next(curr.value + 'bar'); // 这里为什么输出'foobar', 还是不太理解
//console.log(curr);

//gen.next(curr.value + 'bar');
