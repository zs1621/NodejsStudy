var http = require('http');
var mongodb = require('mongodb');

var server = http.createServer( function(req, res) {
        mongodb.MongoClient.connect('mongodb://localhost/test', function(err, db) {
        if (err) {
            res.statusCode = 500; 
            res.end(JSON.stringify(err, null, 2));
        } else {
            db.collection('foos').findOne({test: 2}, function(err, result) {
                if (err){
                    console.log(err);
                    res.end('err');
                } else {
                    console.log(result);
                    res.end(JSON.stringify(result, null, 2)); 

                }
            }); 
        }
    });
});

server.listen(8080, function(){
    console.log('server listen to %d', this.address().port);
});


