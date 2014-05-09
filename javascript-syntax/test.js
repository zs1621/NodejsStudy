function list() {
  console.log(arguments);
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
console.log(list1);

//  Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]


var only = function(obj, keys) {
    obj = obj || {};    
    if ( 'string' == typeof keys ) keys = keys.split(/ +/);
    return keys.reduce(function(ret, key){
        if (null == obj[key])  return ret;    
        ret[key] = obj[key];
        return ret;
    }, {});
}

var obj = {
    name: 'tobi',
    last: 'holowaychuk',
    email: 'tobi@learnboost.com',
    _id: '121345'
};

// 输出 
console.log(only(obj, 'name last email'))

