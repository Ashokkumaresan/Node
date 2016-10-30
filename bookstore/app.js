var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var Genre=require('./models/genre');
var Book=require('./models/books');
app.use(express.static(__dirname));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/bookstore');
var db=mongoose.connection;

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.get('/contact.html', function (req, res) {
   res.sendFile( __dirname + "/" + "contact.html" );
});

app.get('/',function(req,res){
	res.send("Server Running in 3000");	
});

app.get('/api/genres',function(req,res){
	Genre.getGenres(function(err,genre){
		if(err)
			res.send("Error while retreving data");
		else 
			res.json(genre);
	})
});
app.get('/api/genre/:_id',function(req,res){	
	Genre.getGenreById(req.params._id,function(err,genre){
		if(err)
			res.send("Error while retreving data");
		else 
			res.json(genre);
	})
});
app.delete('/api/genre/:_id',function(req,res){	
	Genre.deleteGenre(req.params._id,function(err,genre){
		if(err)
			res.send("Error while deleting data");
		else 
			res.json(genre);
	})
});

app.put('/api/genre/:_id',function(req,res){	
	var genre=req.body;
	Genre.updateGenres(req.params._id,genre,{},function(err,genre){
		if(err)
			res.send("Error while updating data");
		else 
			res.json(genre);
	})
});

app.post('/api/genres',function(req,res){
	var genre=req.body;
	Genre.insertGenres(genre,function(err,genre){
		if(err)
			res.send("Error while inserting");
		else{
			res.json(genre);
		}
	});
});

app.get('/api/books',function(req,res){
	Book.getBooks(function(err,books){
		if(err)
			res.send("Error while retreving data");
		else 
			res.json(books);
	})
});

app.get('/api/book/:_id',function(req,res){
	Book.getBookById(req.params._id,function(err,book){
		if(err)
			res.send("Error while retreiving data");
		else
			res.json(book);
	});
});

app.delete('/api/book/:_id',function(req,res){
	Book.deleteBook(req.params._id,function(err,book){
		if(err)
			res.send("Error while deleting data");
		else
			res.json(book);
	});
});

app.put('/api/book/:_id',function(req,res){
	var book=req.body;
	Book.updateBook(req.params._id,book,{},function(err,book){
		if(err)
			res.send("Error while updating data");
		else
			res.json(book);
	});
});

app.post('/api/book',function(req,res){
	var book=req.body;
	Book.insertBook(book,function(err,book){
		if(err)
			res.send("Error while inserting books");
		else{
			res.json(book);
		}
	});
});


console.log("Server running in port 3000");
app.listen(3000);