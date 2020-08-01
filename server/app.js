const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const FileStore = require('session-file-store')(session);
const methodOverride = require('method-override');
const bcrypt = require('bcrypt');
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const {DB_PASS, DB_USER} = require('dotenv').config().parsed;

console.log(DB_PASS, DB_USER)

const profileRouter = require('./routes/profile');



// Подключаем mongoose.
const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.0z7gs.mongodb.net/react-adaptive?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

app.use(cookieParser());

app.use(
  session({
    store: new FileStore(),
    key: 'user_sid',
    secret: 'anything here',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

// Allows you to use PUT, DELETE with forms.
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

app.use('/profile', profileRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;