var http = require('http');
var mongodb = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {server: {poolSize: 10}});
var fooSchema = mongoose.Schema({
    test: Number
})
var Foo = mongoose.model('foo', fooSchema);

var server = http.createServer( function(req, res) {
        var foo = new Foo({
            test:2 
        });
        console.log(req.headers);
        Foo.findOne({test: 2},function(err, result) {
            if (err) res.end(err);
            console.log(result);
            res.end(JSON.stringify(result, null, 2)); 
        }); 
});

server.listen(8080, function(){
    console.log('server listen to %d', this.address().port);
});


