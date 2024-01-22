const express = require('express');
const { createUser, login } = require('../controllers/user.controllers');

const router = express.Router();

router.route('/').post(createUser);
router.route('/auth').post(login);

module.exports = router;