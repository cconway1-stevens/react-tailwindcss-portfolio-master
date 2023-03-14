var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const uri = process.env.ATLAS_URI;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// connect to MongoDB Atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// define a schema for your MongoDB collection
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// define a model for your MongoDB collection
const Form = mongoose.model('Form', formSchema);

// parse incoming request bodies as JSON
app.use(bodyParser.json());

// define a POST route for form submissions
app.post('/submit-form', async (req, res) => {
  try {
    // create a new document in the 'forms' collection using the submitted data
    const form = new Form(req.body);
    await form.save();

    // send a success response
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    // handle errors
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

module.exports = app;
