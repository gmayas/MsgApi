const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bobyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv'); 
dotenv.config();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(express.json())
app.use(bobyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

// routes
const msgsRouter = require("./routes/msgs.routes");
app.use("/api", msgsRouter);

// Database
require('./js/db/database');

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});