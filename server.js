var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var multer=require('multer')
// npm install https://github.com/mapbox/node-sqlite3/tarball/master sqlite3 for npm
var sqlite3=require('sqlite3').verbose();
var db=new sqlite3.Database('app/database/bookmela.db',(err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

global.img_name="";

// file upload
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './app/media/uploads/book-images/')
  },
  filename: function (req, file, cb) {

  	

  	if(!file.originalname.match(/\.(jpeg|jpg|png)$/)){
  		var err=new Error();
  		err.code='filetype';
  		return cb(err);
  	}else{
  		img_name=Date.now()+'_'+file.originalname;
  		cb(null,img_name);
  	}
  }
});


var upload = multer({ 
	storage: storage,
	limits:{ fileSize: 50000000}
	 }).single('myfile');
	

// file upload end

var port =process.env.PORT || 8080

app.use(express.static(__dirname+"/app"));
app.use(bodyParser.json());

// app.post('/test',function(req, res){
// 	res.send("got it");
// 	console.log(req.body)
// });
 
// app.get('/test',function(req,res){
// 	person={
// 		name:"sanket",
// 		email:"112@jbd.com",
// 		number:"1234566766"
// 	};
// 	res.json(person)
// 	console.log('get reqst sent to aj');

// });


// file upload
app.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      if(err.code==='LIMIT_FILE_SIZE'){
      	res.json({success:false, message:'File size is too large. Limit is 5mb'});
      }else if (err.code==='filetype'){
      		res.json({success:false, message:'File type is invalid. Must be png, jpeg, jpg'});
      }else{
      		console.log(err);
      		res.json({success:false, message:'File cannot be uploaded'});
      }
    }else{
    	if(!req.file){
    			res.json({success:false, message:'No file was selected'});
    	}else{
    			res.json({success:true, message:'File was uploded'});
    	}
    }

    // Everything went fine
  })

  console.log(img_name);

})
// file ul end


// signup

app.post('/signupdata',function(req,res){
	

	db.serialize(function(){
	var stmt=db.prepare("INSERT INTO signup values(?,?,?)");
	
		var name=req.body.username;
		var email=req.body.email;
		var password=req.body.password;
		stmt.run(name,email,password);
	

	stmt.finalize();

db.each("SELECT email from signup where username='sunny'",function(err,row){
	console.log("email:"+row.email);
	console.log(req.body);

});
});
db.close((err) => { 
  		if (err) {
    	return console.error(err.message);
  	}
  	console.log('Succesfully closed database connection.');
	});



});

app.listen(port, function(){
	console.log("app running @ 8080")
})