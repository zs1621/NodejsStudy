function co(fn) {
    return function(done) {
        done = done || function() {}; 
        var gen = fn();
        function next(value) {
            var ret = gen.next(value); 
            if (ret.done) return done(null, ret.value);
            console.log(ret.value, typeof(ret.value));
            switch(true) {
                case 'function' === typeof ret.value:
                    ret.value(function(err, value){
                        if (err) return done(err); 
                        console.log(value, 'value');
                        next(value);
                    });
                    break;

                case !!ret.value.then:
                    ret.value.then(next, done);
                    break;

                case Array.isArray(ret.value):
                    var n = ret.value.length;
                    var res = new Array(n);
                    ret.value.forEach(function(row, index){
                        row(function(err, value) {
                            if (err) {
                                return done(err);
                            } 
                            res[index] = value;
                            --n || next(res);
                        }); 
                    });
                    break;

                    case ret.value === Object(ret.value):
                        var res = {};
                        (function loop(keys, key, err, value){
                            //console.log(keys, key, err, value, 'object');
                            if (err) return done(err); 
                            if (key && value) res[key] = value;
                            var curr = keys.shift();
                            if (curr) ret.value[curr](loop.bind(null, keys, curr))
                            else next(res);
                        })(Object.keys(ret.value));
                        break;
            }
        }
        next();
    }
}
//var co = require('co');
function echo(content) {
    return function(callback) {
        callback(null, content); 
    };
};


function foo() {
    var a = echo('foo');
    var b = echo('bar');
    return [a, b];
};


function bar() {
    var a = echo('foo');
    var b = echo('bar');
    return {
        a: a,
        b: b
    };
}


co(function *() {
    var arr = yield foo();
    var obj = yield bar();
    var nor = yield echo('foobar');
    var arr2 = [yield echo('foo'), yield echo('bar')];
    console.log(arr, obj, nor, arr2);
})();
