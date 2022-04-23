const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const db = require('./src/services/mysql');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
}));
const passport = require('./src/services/passport')(app, db);

const indexRouter = require('./src/routers/index');
const initRouter = require('./src/routers/init');
const usersRouter = require('./src/routers/users')(passport);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/init', initRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
