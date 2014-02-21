/**
 * A simple co * @param  {Function} fn Generator Function
 * @return {Function}      callback
 */
function co(fn) {
  return function(done) {
    done = done || function() {};
 
    var gen = fn();
 
    function next(value) {
      var ret = gen.next(value);
      if (ret.done) return done(null, ret.value);
 
      switch(true) {
        // Function
        case 'function' === typeof ret.value:
          // Standard Callback
          ret.value(function(err, value) {
            if (err) return done(err);
            next(value);
          });
          break;
        // Promise
        case !!ret.value.then:
          // see http://promises-aplus.github.io/promises-spec/#the__method
          ret.value.then(next, done);
          break;
        // Array
        case Array.isArray(ret.value):
          var n = ret.value.length;
          var res = new Array(n);
          ret.value.forEach(function(row, index) {
            row(function(err, value) {
              if (err) return done(err);
              // Keep it's order
              res[index] = value;
              --n || next(res);
            });
          });
          break;
        // Object
        case ret.value === Object(ret.value):
          var res = {};
          (function loop(keys, key, err, value) {
            console.log(keys, key, err, value);
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
  };
}
 
function echo(content) {
  return function(callback) {
    callback(null, content);
  };
};
function foo() {
  var a = echo('foo');
  var b = echo('bar');
  return [a, b];
}
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
