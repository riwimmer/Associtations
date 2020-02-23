var mongoose = require("mongoose");

//==================================================
//USER Schema  
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [	//pass object in
		{
			type: mongoose.Schema.Types.ObjectId,   //this is a mongoose is
			ref: "Post"								//belonging to a post
		}
		]
});

var User = mongoose.model("User", userSchema); //user model

module.exports =  mongoose.model("User", userSchema);		//export model