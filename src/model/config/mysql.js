var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '',
    user     : 'root',
    password : 're^mp123',
    database : 'covid_attendance'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;