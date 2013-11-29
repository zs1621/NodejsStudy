var mysql = require('mysql')
var generic_pool = require('generic-pool');

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

for (var i=0; i < 10000; i++) {
pool.acquire(function(err, client){
        if (err) {
        } else {
            client.query("select * from t_user", [], function(err, data){
                console.log(data); 
                pool.release(client);
            }); 
        }
});
}
