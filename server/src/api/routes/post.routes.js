const express = require('express');
const { getPosts, createPost } = require('../controllers/posts.controllers');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, getPosts);
router.post('/', authMiddleware, createPost);

module.exports = router