var co = require('co');


function add(x, y) {
    return function(callback) {
        callback(null, x + y); 
    };
}


co(function *(){
    for (var i = 0; i < 10; i++) {
        var value = yield add(i, i+1); 
        console.log(value);
    };
})();
