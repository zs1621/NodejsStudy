var http = require('http');
var mongodb = require('mongodb');
var poolModule = require('generic-pool');

var pool = poolModule.Pool({
    name: 'mongodb',
    create: function(callback) {
        mongodb.MongoClient.connect('mongodb://localhost/test', {server: {poolSize: 1}}, function(err, db) {
                callback(err, db); 
            });
    },
    destroy: function(db) { db.close(); },
    max: 10,
//min: 1,
    idleTimeoutMillis: 30000,
    log: true 
});

var server = http.createServer( function(req, res) {
    pool.acquire(function(err, db){
        if (err) {
            res.statusCode = 500; 
            res.end(JSON.stringify(err, null, 2));
        } else {
            db.collection('foos').findOne({test: 2}, function(err, result) {
                res.end(JSON.stringify(result, null, 2)); 
                pool.release(db);
            }); 
        }
    });
});

server.listen(8080, function(){
    console.log('server listen to %d', this.address().port);
});

//setTimeout(function(){
//    http.get('http://localhost:8080', function(res){console.log('request ok')});
//    http.get('http://localhost:8080', function(res){console.log('request ok')});
//    http.get('http://localhost:8080', function(res){console.log('request ok')});
//});
//
