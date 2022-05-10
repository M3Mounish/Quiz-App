const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const PORT = process.env.PORT || 3333;

const app = express();
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(express.json());
app.use(cors());

//
mongoose.connect('mongodb+srv://M3:m3-mongodb@cluster0.sykgz.mongodb.net/Quiz-App?retryWrites=true&w=majority');

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

const User = new mongoose.model("User", userSchema);

app.post('/register', async (req, res) => {
    const { username } = req.body;
    const { password } = req.body;

    if (username == '' || password == '') {
        res.send("none");
    } else {
        User.find({ username: username }, (err, user) => {
            if (user && user != false) {
                console.log("Working bitch");
                console.log(user);
                res.send(false);


            } else {
                User.insertMany({
                    username: username,
                    password: password
                });
                console.log("added");

            }
        })
    }



});

app.post('/login', async (req, res) => {
    let { username } = req.body;
    let { password } = req.body;

    User.find({ username: username, password: password }, (err, user) => {
        if (err) {
            console.log(err);
        }
        res.send(user.status);
        // console.log(user);
    })
})


app.listen(PORT, () => { console.log("Good on port"); })

