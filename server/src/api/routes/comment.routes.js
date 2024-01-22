const express = require('express');
const authMiddleware = require('../middleware/auth');
const { getComments, createComment } = require('../controllers/comment.content');
const router = express.Router();

router.get('/', authMiddleware, getComments);
router.post('/', authMiddleware, createComment);

module.exports = router;
