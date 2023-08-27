const User = require('./Backend/models/UserSchema');



const mongoose = require('mongoose');
const DB = 'mongodb+srv://ShoeWarma:1234@cluster0.5bm2tla.mongodb.net/'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Routes
const userRouter = require('./Backend/routes/userRoutes');




mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'ShoeWarma',
    })
    .then(() => console.log('DB connection was successful! 😁'));


//Root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Frontend/HomePage.html');
});



app.use(express.static(path.join(__dirname, 'Frontend')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', userRouter)

app.listen(3000, () => console.log('TEST'));


module.exports = app;