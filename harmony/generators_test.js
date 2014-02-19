/**
 * 代码来自 [http://lifemap.in/koa-co-and-coruntine/]
 * */

var echo = function *(){
    yield 'Hello';
    yield 'World';
    return '!';
}

var generator = echo(); // 执行echo() 时，会返回一个生成器对象， 且不会马上执行函数内容

var res = [];
var curr = null;

res.push((curr = generator.next()).value); // 此时执行generator.next(), 函数echo() 体开始执行， 到 yield 'Hello' 停止， 区执行'Hello', 此时会返回一个对象， {value: 'Hello' done: false}
res.push((curr = generator.next()).value); // 此时执行generator.next(), 函数从上次yield停止的地方继续， 到yield 'World'停止, 当让还会同理返回一个对象{ value: 'World', done: false};


curr = generator.next(); //最后一次执行那个generator.next(), 从上一个yield 'World'开始， 到return '!'停止 
console.log(curr, 'the last value');//{ value: '!', done: true } 'the last value'


if (curr.done) {
    console.log(res.join('') + curr.value); // Hello world
}


/**
 *生成器是一种可以把执行内容切割成一段一段抛入协程中，并交由主线程的生成器对象进行控制的工具.  
 * */
