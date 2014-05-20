
var log = ['test'];
var obj = {
    get latest() {
        if (log.length == 0) return undefined;    
        return log[log.length - 1];
    }    
}

console.log(obj.latest); // 输出 "test"
obj.latest = 0;
console.log(obj.latest);
delete obj.latest;
console.log(obj.latest);



var o = {
    log: ['fefe'],
    get current () {
        return this.log[this.log.length - 1]; 
    },
    set current (str) {
        return this.log[this.log.length - 1] = str;    
    }    
}

console.log(o.current);
o.current = 9;
console.log(o.current);
delete o.current;
