const express = require('express')
const morgan = require('morgan')
const cors = require('cors');

const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());


module.exports = app;