const express = require('express');
const mongoose = require('mongoose');



const postsRoute = require('./routes/post');

const app = express();


// middleware
// app.use('/', (req, res) => {
//     console.log(req.params);
// });

// using express's builtin bodyparser
app.use(express.json());

app.use('/post', postsRoute);








// dbconenct

// mongoose.connect('mongodb://localhost:27017/rest',
// { useNewUrlParser: true},

// () => console.log("connected to db"));




//Routes
app.get('/', (req, res) => {
    res.send("i am working");
});













// to bootup the server
app.listen(3001);