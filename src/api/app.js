var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var file = require('./models/file')

var app = express();

mongoose.connect('mongodb://localhost:27017/ngfile',{useNewUrlParser: true, useUnifiedTopology: true},
function (error) {
  if (error) {
    console.log(error)
  } else {
    console.log('DataBase Connected Successfully')
  }
});

app.use(logger('dev'));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
