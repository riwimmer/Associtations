var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2",{
useNewUrlParser: true,
useUnifiedTopology: true
});   //connects and creates the cat_app database 

//link to modules and files post & user
var Post = require("./models/post");  // in node needs ./folder where it starts fromnode 
var User = require("./models/user");

//var User = mongoose.model("User", userSchema); //user model
//var Post = mongoose.model("Post", postSchema); //post model

//==================================================
// find user and add post, show
Post.create({
	title: "In-n-out are the best burgers pt 4",
	content: "disgusting "
}, function(err, post){
	User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
		if(err){
			console.log(err);
		} else {
			foundUser.posts.push(post); //(post) is just created and get pushed in
			foundUser.save(function(err, data){
				if(err){
					console.log(err);
				} else {
					console.log(data);
				}
			});
		}			
	});
});


/*
//==================================================
// find user and find all posts for that user ->
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
	    //above does finds user via email, it populate field post and stick it in post array, no call back
		// and the exec will make it happen -> returns ful posts material as well
	if (err){
		console.log(err);
	} else {
		console.log(user);
	}
});
*/


/*
//==================================================
User.create({
	email: "bob@gmail.com",
	name: "Bob Belcher"
});
*/


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

*/
