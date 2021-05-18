'user strict';

const mysql = require('mysql');

//Local mysql db connection
const mysqlConnection = mysql.createConnection({
	host : "172.21.80.1",
	user : "username",
	password : "password",
	database: "node-mysql"
});

mysqlConnection.connect((err) => {
	if (err){
		throw err;
	}
	else{
		console.log("MySQL Connected!");
	}
});

module.exports = mysqlConnection;