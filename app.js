const User = require('./Backend/models/UserSchema');


const mongoose = require('mongoose');
const DB = 'mongodb+srv://ShoeWarma:1234@cluster0.5bm2tla.mongodb.net/'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Routes
const userRouter = require('./Backend/routes/userRoutes');
const productRouter = require('./Backend/routes/productRoutes');
const orderRouter = require('./Backend/routes/orderRoutes');





mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'ShoeWarma',
    })
    .then(() => console.log('DB connection was successful! 😁'));


//Root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Frontend/Public/HomePage.html');
});



app.use(express.static(path.join(__dirname, 'Frontend/Public')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/orders', orderRouter)

app.listen(3000, () => console.log('TEST'));


module.exports = app;