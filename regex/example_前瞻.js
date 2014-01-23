
/**
 * 代码来自 [humanize-number](https://github.com/component/humanize-number/blob/master/index.js)
 * */
var a = function (n, options) {
    options = options || {};
    var d = options.delimiter || ',';
    var s = options.separator || '.';
    n = n.toString().split('.');
    n[0] = n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + d);
    //console.log(n);
    return n.join(s);
}

console.log(a(100));

var b = 1000000;
var totest = /(\d)(?=(\d\d\d)+(?!\d))/g;
console.log(totest.test(b));
console.log(RegExp.$1);
console.log(RegExp.$2);

// 简单分组
var c = "ABC";
var t1 = /(A(B(C)))/;
console.log(t1.test(c));
console.log(RegExp.$1);
console.log(RegExp.$2);
console.log(RegExp.$3);


// 分组 加 分组  why
var d = "mon and dad";
var t2 = /(mon( and dad)?)/;
console.log(t2.test(d));
console.log(RegExp.$1);
console.log(RegExp.$2);
console.log(RegExp.$3);
console.log(d.match(t2))
