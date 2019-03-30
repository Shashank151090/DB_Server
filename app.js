const express = require ('express');
const bodyParser = require ('body-parser');
const product = require('./routes/product.route');
const friend = require('./routes/friend.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://shashank:shasu1234@cluster0-ud3kw.mongodb.net/test?retryWrites=true';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var port = 8000;

app.use('/products', product);
app.use('/friend', friend);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});