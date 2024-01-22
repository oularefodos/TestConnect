const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const notFound = require('./api/middleware/notFoundError');
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


// Error handler 
app.use(notFound);

module.exports = app;