const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

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
    posts: [postSchema]
});

const User = mongoose.model("User", userSchema);

// const newUser = new User({
//     email: "charlie@brown.edu",
//     name: "Charlie Brown"
// });
// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: "Just kidding. Go to potions class to learn it!"
// });

// newUser.save(function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// const newPost = new Post({
//     title: "Reflections on apples",
//     content: "Apples are delicious."
// });
// newPost.save(function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

User.findOne({name: "Charlie Brown"}, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("BEFORE :" + data);
        data.posts.push({
            title: "3 things I really hate",
            content: "Voldemort. Voldemort. Voldemort"
        });
        data.save(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log("AFTER :" + data);
            }
        })
    }
});
