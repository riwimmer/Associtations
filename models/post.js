var mongoose = require("mongoose");

//=====================================================
//POST title content, needs to be first as this post schema is embedded in user
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});


var Post = mongoose.model("Post", postSchema); //this is model

module.exports =  mongoose.model("Post", postSchema);		//export model