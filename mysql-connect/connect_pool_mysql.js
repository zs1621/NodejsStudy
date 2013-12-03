/**
 * test generic-pool reconnect  
 * 1. node connect_pool_mysql.js 
 * 2. curl 127.0.0.1:1337
 * 3. mysql -uuser -ppassword
 * 4. set wait_timeout=10
 * 5. wait 10 sencods
 * 6. curl 127.0.0.1:1337
 * 7. see mysql log 
 **/
var mysql = require('mysql')
var generic_pool = require('generic-pool');
var http = require('http');

var pool = generic_pool.Pool({
    name: 'mysql',
    max: 10,
    create: function(callback) {
        var Client = mysql.createConnection({
            host: 'localhost', 
            user: 'nodejs',
            password: 'nodejs',
            database: 'nodetest'
        }); 

        callback(null, Client);
    },
    destroy: function(client) {
        client.end();
    },
    max: 10,
    idleTimeoutMillis: 30000,
    log: true
});

var app = http.createServer(function (req, res) {
    pool.acquire(function(err, client){
        if (err) {
        } else {
            client.query("select * from t_user", [], function(err, data){
                res.writeHead(200, {'Content-Type': 'text/plain'});; 
                res.end(String(data))
                pool.release(client);
            }); 
        }
    });
});

app.listen(1337);
