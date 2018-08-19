
var sqlite3=require('sqlite3').verbose();
var db=new sqlite3.Database('../database/bookmela.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});


	db.serialize(function(){

		// creating table
		db.run("CREATE TABLE IF NOT EXISTS signup (username TEXT(20), email TEXT(20), password TEXT(20))");
		// db.run("INSERT INTO signup values('sanket','776sanket@gmail.com','643424')");
		// accessing table
		// db.each("SELECT username,email,password from signup",function(err,row){
		// console.log("[name= "+row.username+", email= "+row.email+", password= "+row.password+"]");
		// });
		db.run("CREATE TABLE IF NOT EXISTS demo(username TEXT(20), email TEXT(20), password TEXT(20))");
		
		console.log("Database Created");
	});

	db.close((err) => {
  		if (err) {
    	return console.error(err.message);
  	}
  	console.log('Succesfilly closed database connection.');
	});