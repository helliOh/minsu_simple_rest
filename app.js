const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const mysql = require('mysql');

const router = require('./routes');
const sequelize = require('./models').sequelize;

const port = 3000;
const app = express();
sequelize.sync();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

router(app);

app.listen(port, () =>{
  console.log(`Now server listens port(${port})!`);
});

module.exports = app;
