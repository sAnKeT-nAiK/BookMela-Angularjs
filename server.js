var express=require('express');
var app=express();
var bodyParser=require('body-parser');

// npm install https://github.com/mapbox/node-sqlite3/tarball/master sqlite3 for npm
// var sqlite3=require('sqlite3').verbose();
// var db=new sqlite3.Database('abcd');

// db.serialize(function(){
// 	db.run("CREATE TABLE user (id INT, dt TEXT)");
// 	var stmt=db.prepare("INSERT INTO user values(?,?)");
// 	for(var i=0;i<3;i++){
// 		var a="sanket";
// 		var b="naik"
// 		stmt.run(a,b);
// 	}

// 	stmt.finalize();
// db.each("SELECT id,dt from user",function(err,row){
// 	console.log("User id:"+row.id,row.dt);
// });
// });
// db.close();

var port =process.env.PORT || 8080

app.use(express.static(__dirname+"/app"));
app.use(bodyParser.json());

app.post('/test',function(req, res){
	res.send("got it");
	console.log(req.body)
});
 
app.get('/test',function(req,res){
	person={
		name:"sanket",
		email:"112@jbd.com",
		number:"1234566766"
	};
	res.json(person)
	console.log('get reqst sent to aj');

})

// app.listen(8080);
// console.log("running at 8080");

app.listen(port, function(){
	console.log("app running @ 8080")
})