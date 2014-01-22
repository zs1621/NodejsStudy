
/**
 * 代码来自 [humanize-number](https://github.com/component/humanize-number/blob/master/index.js)
 * */
var a = function (n, options) {
    options = options || {};
    var d = options.delimiter || ',';
    var s = options.separator || '.';
    n = n.toString().split('.');
    n[0] = n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + d);
    console.log(n);
    return n.join(s);
}

console.log(a(100000));
