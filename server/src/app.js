const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const notFound = require('./api/middleware/notFoundError');
const userRoutes = require('./api/routes/user.routes')
const postRoutes = require('./api/routes/post.routes')
const commentroutes = require('./api/routes/comment.routes')
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentroutes);

// Error handler 
app.use(notFound);

module.exports = app;