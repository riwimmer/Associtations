var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo",{
useNewUrlParser: true,
useUnifiedTopology: true
});   //connects and creates the cat_app database 

//=====================================================
//POST title content, needs to be first as this post schema is embedded in user
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema); //this is model

//==================================================
//USER Schema  -> 2nd part: one to many relationship , one user many posts
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]	//this adds array of posts with inside user, has to be postSchema not Post
});

var User = mongoose.model("User", userSchema); //user model



//=========================================================
/* Create new user
var newUser = new User({
	email: "Charlie@brown.edu",
	name: "Charlie Brown"
});


newUser.save(function(err, user){
	if(err){
		console.log(err);
	} else {
		console.log(user);
	}
});
*/

/*
//=========================================================
// Create new user
var newUser = new User({
	email: "Harry@brown.edu",
	name: "Harry Potter"
});

newUser.posts.push({   //add a posts (method - not post) to user, push in array
	title: "The magic",
	content: "story on how to make magic",
});


newUser.save(function(err, user){
	if(err){
		console.log(err);
	} else {
		console.log(user);
	}
});
*/


//=============================================================
/*create and use a post
var newPost = new Post({
	title: "Super posting",
	content: "best blog written ever"
});

newPost.save(function(err, post){
	if(err){
		console.log(err);
	} else {
		console.log(post);
	}
});
*/

/*
//=========================================================
// Find one user
User.findOne({name: "Harry Potter"}, function(err, user){
	if(err){
		console.log(err);
	} else {
		console.log(user);
	}
});
*/

//=========================================================
// Finde one user and add contenct -> result will show one to many 
User.findOne({name: "Harry Potter"}, function(err, user){
	if(err){
		console.log(err);
	} else {
		user.posts.push({
			title: "3 things ",
			content: " more than 3 things"
		});
		user.save(function(err, user){  //this user is what comes back from mongo database
			if(err){
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});
