var mongoose=require('mongoose');
var bookSchema=mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	genre:{
		type:String
	},
	description:{
		type:String
	},
	author:{
		type:String
	},
	publisher:{
		type:String
	},
	pages:{
		type:String
	},
	image_url:{
		type:String
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Book=module.exports=mongoose.model('books',bookSchema);

module.exports.getBooks=function(callback,limit){
	Book.find(callback).limit(limit);
}

module.exports.getBookById=function(_id,callback){
	Book.findById(_id,callback);
}

module.exports.deleteBook=function(_id,callback){
	var query={_id:_id}
	Book.remove(query,callback);
}
module.exports.insertBook=function(book,callback){
	Book.create(book,callback);
}

module.exports.updateBook=function(_id,book,options,callback){
	var query={_id:_id}
	var update={
		title:book.title,
		genre:book.genre,
		description:book.description,
		author:book.author,
		publisher:book.publisher,
		pages:book.pages,
		image_url:book.image_url
	}
	Book.findOneAndUpdate(query,update,options,callback);
}