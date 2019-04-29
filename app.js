const express = require ('express');
const bodyParser = require ('body-parser');
const product = require('./routes/product.route');
const friend = require('./routes/friend.route');
const app = express();


const path = require('path');
const fs = require('fs');
const multer = require('multer');

const DIR = './uploads';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, file.originalname);
    }
});
let upload = multer({storage: storage});


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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

app.get('/api', function (req, res) {
  res.end('file catcher example');
});

app.post('/api/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });

      } else {
        console.log('file received');
        return res.send({
          success: true
        })
      }
});


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
