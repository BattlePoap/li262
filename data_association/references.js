const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

// POST - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Post = mongoose.model("Post", postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

const User = mongoose.model("User", userSchema);

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// Post.create({
//     title: "How to cook the best burger pt.3",
//     content: "geqthfdvghsyjfgsh"
// }, function (err, post) {
//     User.findOne({email: "bob@gmail.com"}, function (err, user) {
//         if (err) {
//             console.log(err);
//         } else {
//             user.posts.push(post);
//             user.save(function (err, data) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

// FIND USER AND ALL POSTS FOR THAT USER
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function (err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});
