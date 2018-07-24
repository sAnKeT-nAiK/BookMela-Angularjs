var express=require('express');
var app=express();
var bodyParser=require('body-parser');

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

app.listen(8080);
console.log("running at 8080");