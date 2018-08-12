
var sqlite3=require('sqlite3').verbose();
var db=new sqlite3.Database('../database/bookmela.db');

	db.serialize(function(){

		// creating table
		db.run("CREATE TABLE signup (username TEXT(20), email TEXT(20), password TEXT(20))");
		db.run("INSERT INTO signup values('sanket','776sanket@gmail.com','643424')");
		// accessing table
		db.each("SELECT username,email,password from signup",function(err,row){
		console.log("[name= "+row.username+", email= "+row.email+", password= "+row.password+"]");
		});


		db.run("CREATE TABLE demo (username TEXT(20), email TEXT(20), password TEXT(20))");
		db.run("INSERT INTO demo values('sanket','776sanket@gmail.com','643424')");
		db.each("SELECT username,email,password from demo",function(err,row){
		console.log("[name= "+row.username+", email= "+row.email+", password= "+row.password+"]");
		});
		
	});
	db.close();
