var mongoose=require('mongoose');
var genresSchema=mongoose.Schema({
	name:{
		type:String,
		required:true
	},	
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Genre=module.exports=mongoose.model('genres',genresSchema);

module.exports.getGenres=function(callback,limit){
	Genre.find(callback).limit(limit);
}

module.exports.getGenreById=function(_id,callback){
	Genre.findById(_id,callback);
}
module.exports.deleteGenre=function(_id,callback){
		var query={_id:_id}
	Genre.remove(query,callback);
}

module.exports.insertGenres=function(genre,callback){
	Genre.create(genre,callback);
}

module.exports.updateGenres=function(_id,genre,options,callback){
	var query={_id:_id}
	var update={
		name:genre.name
	}
	Genre.findOneAndUpdate(query,update,options,callback);
}