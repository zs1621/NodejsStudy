var async = require('async');
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database: 'nodetest',
    port: 3306
});

conn.connect();

conn.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});

var insertSQL = 'insert into t_user(name) values("zh"), ("jay")';
var selectSQL = 'select * from t_user limit 10';
var deleteSQL = 'delete from t_user';
var updateSQL = 'update t_user set name="zh a" where name="zh"';

var setp1 = function(callback) {
    conn.query(deleteSQL, function(err, res) {
        if (err) callback(err, null); 
        //console.log("DELETE Return ==>");
        callback(null, res);
    });
};

var setp2 = function(callback) {
    conn.query(insertSQL, function(err, res){
        if (err) callback(err, null);
        //console.log("INSERT Return ==>");
        callback(null, res);
    });
};

var setp3 = function(callback) {
    conn.query(selectSQL, function(err, res){
        if (err) callback(err, null);
        //console.log("SELECT Return ==>");
        //for (var i in res) {
        //    console.log(res[i]);
        //};
        callback(null, res);
    });
};

var setp4 = function(callback) {
    conn.query(updateSQL, function(err, res){
        if (err) callback(err, null);
        //console.log("UPDATE Return ==>");
        callback(null, res);
    });
};

async.series([
        setp1, setp2, setp3, setp4
        ], function(err, results){
            console.log(err, '--');
            console.log(results, '++');
        });
