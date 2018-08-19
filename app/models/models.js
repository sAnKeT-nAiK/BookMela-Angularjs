
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
		db.run("CREATE TABLE IF NOT EXISTS books (title TEXT(50), author TEXT(50), pages TEXT(10), year TEXT(10), category TEXT(30), image TEXT(200), pdf TEXT(200))");
		
		console.log("Database Created");
	});

	db.close((err) => {
  		if (err) {
    	return console.error(err.message);
  	}
  	console.log('Succesfilly closed database connection.');
	});